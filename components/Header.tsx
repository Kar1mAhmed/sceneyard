'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(true); // Start with scrolled state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Consistent offset for all sections
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border border-[var(--border)]'
              : 'bg-white/70 backdrop-blur-xl shadow-lg border border-white/50'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-lg opacity-50 group-hover:opacity-75 transition-opacity rounded-xl" />
              <div
                className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center font-black text-white text-sm shadow-xl group-hover:scale-110 transition-transform"
                aria-label="SceneYard logo"
              >
                SY
              </div>
            </div>
            <span className="text-xl font-black text-foreground tracking-tight group-hover:text-accent transition-colors">
              SceneYard
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50" role="navigation">
            <button
              onClick={() => scrollToSection('demo')}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted hover:text-foreground hover:bg-white transition-all focus:outline-none"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted hover:text-foreground hover:bg-white transition-all focus:outline-none"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted hover:text-foreground hover:bg-white transition-all focus:outline-none"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="px-5 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-[var(--accent-hover)] hover:shadow-lg transition-all focus:outline-none"
            >
              Join Waitlist
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => {
              const nav = document.getElementById('mobile-nav');
              nav?.classList.toggle('hidden');
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        className="hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[var(--border)] shadow-lg"
      >
        <div className="px-6 py-4 space-y-3">
          <button
            onClick={() => {
              scrollToSection('demo');
              document.getElementById('mobile-nav')?.classList.add('hidden');
            }}
            className="block w-full text-left text-muted hover:text-foreground transition-colors py-2"
          >
            Demo
          </button>
          <button
            onClick={() => {
              scrollToSection('how-it-works');
              document.getElementById('mobile-nav')?.classList.add('hidden');
            }}
            className="block w-full text-left text-muted hover:text-foreground transition-colors py-2"
          >
            How it Works
          </button>
          <button
            onClick={() => {
              scrollToSection('faq');
              document.getElementById('mobile-nav')?.classList.add('hidden');
            }}
            className="block w-full text-left text-muted hover:text-foreground transition-colors py-2"
          >
            FAQ
          </button>
          <button
            onClick={() => {
              scrollToSection('waitlist');
              document.getElementById('mobile-nav')?.classList.add('hidden');
            }}
            className="block w-full text-center px-4 py-2 rounded-full bg-accent text-white font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            Join Waitlist
          </button>
        </div>
      </nav>
    </header>
  );
}
