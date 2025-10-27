'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const animatedWords = [
  'Professional',
  'The Best',
  'Most modern',
  'Up-to-date',
  'Easy to use',
  'Unique',
  'Diverse',
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    console.log('Hero: Saving email to sessionStorage:', email);
    // Store email in sessionStorage
    sessionStorage.setItem('waitlist_email', email);
    console.log('Hero: Email saved, value in storage:', sessionStorage.getItem('waitlist_email'));
    
    // Dispatch custom event to notify form
    window.dispatchEvent(new CustomEvent('waitlist-email-set', { detail: { email } }));
    
    // Wait a bit before scrolling
    setTimeout(() => {
      // Scroll to waitlist section
      const waitlistSection = document.getElementById('waitlist');
      if (waitlistSection) {
        const offset = 50;
        const elementPosition = waitlistSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        console.log('Hero: Scrolling to waitlist section');
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
    
    // Clear the hero email input
    setEmail('');
  };

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 mt-8">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated headline */}
        <div className="mb-4 h-24 sm:h-32 flex items-center justify-center animate-in fade-in slide-in-from-top-6 duration-700">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block text-accent"
              >
                {animatedWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </div>

        {/* Subheadline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          After Effects project files that helps editors ship faster.
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          We promise to provide Studio-level templates that are different from any other template providers, clean comps, and editable controls — drop in, customize, and publish.
        </p>

        {/* Waitlist form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500"
          aria-label="Join waitlist form"
        >
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-6 py-4 pr-40 text-base rounded-xl bg-white border border-[var(--border)] text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-all shadow-md"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Get Started
            </button>
          </div>
        </form>

        {/* Secondary CTA */}
        <button
          onClick={scrollToDemo}
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors group focus:outline-none focus:text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700"
          aria-label="Preview demo section"
        >
          <span className="text-lg font-medium">Preview Demo</span>
        </button>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted" aria-hidden="true" />
      </div>
    </section>
  );
}
