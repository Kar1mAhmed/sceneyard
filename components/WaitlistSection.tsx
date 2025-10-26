'use client';

import { Crown, Users, Gift, Zap } from 'lucide-react';
import MultiStepWaitlistForm from './MultiStepWaitlistForm';

export default function WaitlistSection() {

  return (
    <>
      {/* Main Waitlist Section */}
      <section id="waitlist" className="relative py-12 px-6">
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

          {/* Multi-Step Waitlist Form */}
          <MultiStepWaitlistForm />

          {/* Golden perks */}
          {/* <div className="mt-12 p-8 rounded-2xl bg-blue-50 border-2 border-blue-200 shadow-md">
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
          </div> */}
        </div>
      </section>
    </>
  );
}
