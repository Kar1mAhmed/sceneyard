'use client';

import { useState, useEffect } from 'react';
import { Lock, Download, RefreshCw } from 'lucide-react';

interface WaitlistResponse {
  id: number;
  email: string;
  referral_code: string | null;
  features: string | null;
  pricing_style: string | null;
  demo_rating: number | null;
  monthly_budget: string | null;
  created_at: string;
  updated_at: string;
  completed: number;
}

export default function AdminResponsesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responses, setResponses] = useState<WaitlistResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side check (in production, this should be server-side)
    if (username === 'admin' && password === '$sceneyard2025%') {
      setIsAuthenticated(true);
      fetchResponses();
    } else {
      setError('Invalid credentials');
    }
  };

  const fetchResponses = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist');
      const data = await res.json() as { success: boolean; data: WaitlistResponse[] };
      if (data.success) {
        setResponses(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch responses:', err);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Email', 'Referral Code', 'Features', 'Pricing Style', 'Demo Rating', 'Monthly Budget', 'Completed', 'Created At'];
    const rows = responses.map(r => [
      r.email,
      r.referral_code || '',
      r.features ? JSON.parse(r.features).join('; ') : '',
      r.pricing_style || '',
      r.demo_rating || '',
      r.monthly_budget || '',
      r.completed ? 'Yes' : 'No',
      new Date(r.created_at).toLocaleString(),
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-responses-${new Date().toISOString()}.csv`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-6">
            <Lock className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-center text-foreground mb-2">
            Admin Access
          </h1>
          <p className="text-center text-muted mb-6">
            Enter your credentials to view waitlist responses
          </p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Waitlist Responses
            </h1>
            <p className="text-muted">
              Total responses: {responses.length} | Completed: {responses.filter(r => r.completed).length}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchResponses}
              disabled={loading}
              className="px-4 py-2 rounded-xl border border-gray-300 text-foreground font-medium hover:bg-gray-50 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={exportToCSV}
              className="px-4 py-2 rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Features
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Pricing
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {responses.map((response) => (
                  <tr key={response.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                      {response.email}
                      {response.referral_code && (
                        <span className="ml-2 text-xs text-muted">
                          (Ref: {response.referral_code})
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted">
                      {response.features ? (
                        <div className="max-w-xs">
                          {JSON.parse(response.features).map((f: string, i: number) => (
                            <span key={i} className="inline-block px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs mr-1 mb-1">
                              {f}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                      {response.pricing_style || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                      {response.demo_rating ? `${response.demo_rating}/10` : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                      {response.monthly_budget || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        response.completed 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {response.completed ? 'Completed' : 'In Progress'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                      {new Date(response.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
