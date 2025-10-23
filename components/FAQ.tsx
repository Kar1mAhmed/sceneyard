'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does the credit system work?',
    answer:
      'Credits are used to download templates. Each template costs between 1-5 credits depending on complexity. You can purchase credit packs or subscribe for monthly credits. Golden Members get +15% bonus credits on every purchase.',
  },
  {
    question: 'What are the pricing plans?',
    answer:
      'We offer flexible pricing: pay-as-you-go credit packs starting at $9 for 10 credits, or monthly subscriptions from $29/month with 20 credits included. Golden Members get lifetime +15% bonus credits. Full pricing will be announced at launch.',
  },
  {
    question: 'Can I use templates for commercial projects?',
    answer:
      'Yes! All templates include a commercial license. You can use them in client work, YouTube videos, social media content, and any commercial projects. The license is per-project, meaning you can use the template in unlimited projects once downloaded.',
  },
  {
    question: 'What if I need a refund?',
    answer:
      'We offer a 14-day satisfaction guarantee. If a template doesn\'t work as described or has technical issues, contact support for a full credit refund. Credits themselves are non-refundable but never expire.',
  },
  {
    question: 'Do templates require plugins?',
    answer:
      'Most templates are plugin-free and work with vanilla After Effects. When plugins are required, we clearly mark them in the template description. We prioritize templates that work out-of-the-box with standard AE installations.',
  },
  {
    question: 'Can I sell my own templates on SceneYard?',
    answer:
      'Yes! We\'re building a creator program where motion designers can sell their templates. Creators earn 70% revenue share. If you\'re interested, indicate this in the feedback form and we\'ll reach out during the beta phase.',
  },
];

function FAQAccordionItem({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`mb-4 rounded-2xl border transition-all duration-300 ${
      isOpen ? 'border-accent shadow-lg bg-white' : 'border-[var(--border)] bg-white hover:border-accent/50 hover:shadow-md'
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-semibold pr-8 transition-colors ${
          isOpen ? 'text-accent' : 'text-foreground'
        }`}>
          {faq.question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
          isOpen ? 'bg-accent rotate-180' : 'bg-gray-100'
        }`}>
          <ChevronDown
            className={`w-5 h-5 transition-colors ${
              isOpen ? 'text-white' : 'text-accent'
            }`}
            aria-hidden="true"
          />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="pl-2 border-l-2 border-accent/30">
            <p className="text-foreground/80 leading-relaxed text-base pl-4">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted">
            Everything you need to know about SceneYard
          </p>
        </div>

        <div
          className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-8"
          role="region"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted mb-4">Still have questions?</p>
          <a
            href="mailto:support@sceneyard.com"
            className="inline-flex items-center gap-2 text-accent hover:text-[var(--accent-hover)] font-medium transition-colors focus:outline-none"
          >
            Contact us at support@sceneyard.com
          </a>
        </div>
      </div>
    </section>
  );
}
