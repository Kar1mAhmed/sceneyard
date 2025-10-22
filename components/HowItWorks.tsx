'use client';

import { Zap, Sparkles, Layers, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Join the Waitlist',
    description: 'Get early access & 10 trial credits to explore premium templates.',
  },
  {
    number: '02',
    title: 'Get Early Access',
    description: 'Login to your account and browse our curated library of professional templates.',
  },
  {
    number: '03',
    title: 'Download & Edit',
    description: 'Drop templates into After Effects and customize with clean, organized comps.',
  },
  {
    number: '04',
    title: 'Ship Faster',
    description: 'Publish faster, deliver higher-quality edits, and impress your clients.',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Save hours of work with ready-to-use templates',
  },
  {
    icon: Sparkles,
    title: 'Studio Quality',
    description: 'Professional-grade templates built by experts',
  },
  {
    icon: Layers,
    title: 'Clean Comps',
    description: 'Organized layers and intuitive controls',
  },
  {
    icon: Rocket,
    title: 'No Fluff',
    description: 'Only what you need, nothing you don\'t',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How SceneYard Works
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Four simple steps to transform your workflow
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20 max-w-6xl mx-auto overflow-x-auto">
          <div className="relative min-w-[800px] px-8">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-accent" />
            
            {/* Steps */}
            <div className="flex items-start justify-between">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center group flex-1">
                  {/* Number circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center max-w-[200px]">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        {/* <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Why Editors Love SceneYard
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-accent transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-2 mb-4">
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Additional benefits list */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-foreground mb-6">
              What You Get
            </h4>
            <ul className="space-y-4">
              {[
                'Instant download of high-quality After Effects project files',
                'Clean, organized compositions with intuitive controls',
                'No unnecessary plugins or dependencies',
                'Commercial license included with every template',
                'Regular updates with new templates added weekly',
                'Priority support for Golden Members',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
