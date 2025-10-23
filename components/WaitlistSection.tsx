'use client';

import { useState } from 'react';
import { Crown, Users, Gift, Zap } from 'lucide-react';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showReferral, setShowReferral] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', { email, referralCode });
    alert('Welcome to SceneYard! Check your email for confirmation.');
    setEmail('');
    setReferralCode('');
  };

  return (
    <>
      {/* Main Waitlist Section */}
      <section id="waitlist" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Join the Waitlist
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Be among the first to access premium After Effects templates
            </p>
          </div>

          {/* Social proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="group text-center p-8 rounded-2xl bg-white border border-[var(--border)] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                <Zap className="w-8 h-8 text-accent group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">400+</div>
              <div className="text-sm font-medium text-muted">High-quality scenes</div>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white border border-[var(--border)] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                <Users className="w-8 h-8 text-accent group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">500</div>
              <div className="text-sm font-medium text-muted">Golden spots available</div>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white border border-[var(--border)] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                <Gift className="w-8 h-8 text-accent group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">10</div>
              <div className="text-sm font-medium text-muted">Trial credits included</div>
            </div>
          </div>

          {/* Waitlist form */}
          <div className="bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="waitlist-email" className="block text-sm font-medium text-foreground mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  id="waitlist-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              {/* Referral Code (if shown) */}
              {showReferral && (
                <div>
                  <label htmlFor="referral-code" className="block text-sm font-medium text-foreground mb-2">
                    Referral code (optional)
                  </label>
                  <input
                    type="text"
                    id="referral-code"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    className="w-full px-5 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter referral code"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent shadow-md hover:shadow-lg"
              >
                Join Waitlist
              </button>

              {/* Referral Code Toggle */}
              {!showReferral && (
                <button
                  type="button"
                  onClick={() => setShowReferral(true)}
                  className="text-accent hover:text-[var(--accent-hover)] text-sm font-medium transition-colors focus:outline-none"
                >
                  Have a referral code?
                </button>
              )}

              {/* Terms */}
              <p className="text-xs text-muted text-center pt-2">
                By joining, you agree to receive updates about SceneYard. Unsubscribe anytime.
              </p>
            </form>

            {/* Golden Member Progress Bar */}
            <div className="mt-6 p-5 rounded-xl bg-gray-50 border border-[var(--border)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <span className="text-sm font-semibold text-foreground">Golden Members</span>
                </div>
                <span className="text-xs text-muted font-medium">128 / 500</span>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                  style={{ width: '25.6%' }}
                />
              </div>
              <p className="text-xs text-muted mt-2 text-center">+15% credits for life • Limited spots</p>
            </div>
          </div>

          {/* Golden perks */}
          <div className="mt-12 p-8 rounded-2xl bg-blue-50 border-2 border-blue-200 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-accent" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-foreground">
                Golden Member Perks
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                '+15% bonus credits on every purchase for life',
                'Priority access to new templates before public release',
                'Exclusive Golden-only templates monthly',
                'Priority customer support',
                'Early beta access to new features',
                'Golden badge on your profile',
              ].map((perk, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
