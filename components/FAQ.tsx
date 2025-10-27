'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What makes SceneYard different from other template websites?',
    answer:
      'SceneYard isn\'t a massive dump of random templates — it\'s a curated library. Every project is hand-built, performance-tested, and designed with modern editing workflows in mind. We focus on clean structure, smart controls, and cinematic quality, not filler content.',
  },
  {
    question: 'Are these templates just re-uploads from other marketplaces?',
    answer:
      'Absolutely not. Every template on SceneYard is exclusive and originally produced by our in-house creators or verified motion designers. No recycled content — every file goes through a creative review and optimization process before it\'s added.',
  },
  {
    question: 'Can I customize the templates easily?',
    answer:
      'Yes — every SceneYard project is built to be editor-friendly. All layers are labeled, color-coded, and organized with intuitive controls for text, colors, and animations. You\'ll spend less time digging through layers and more time creating.',
  },
  {
    question: 'Do I need plugins to use these templates?',
    answer:
      'Most SceneYard templates are plugin-free, so you can use them out of the box with standard After Effects. If a project uses a plugin (for advanced effects), it\'s clearly labeled before download.',
  },
  {
    question: 'How are SceneYard templates optimized?',
    answer:
      'Each template is: Designed for smooth playback and render speed • Compatible with multiple AE versions • Organized in a clean folder structure • Balanced between design quality and performance. You\'ll feel the difference the moment you open one.',
  },
  {
    question: 'What\'s included when I download a project?',
    answer:
      'You\'ll receive: The original .aep project file • A quick customization guide • Any required media placeholders (images, text comps, etc.). No clutter, no surprises — just plug and play.',
  },
  {
    question: 'Can I use the templates in commercial projects?',
    answer:
      'Yes — your active subscription gives you a commercial-use license for all downloads. You can use them freely in client work, ads, or social content (as long as you don\'t resell the template itself).',
  },
  {
    question: 'What if I want something specific that\'s not in the library?',
    answer:
      'We love requests. You can suggest new template ideas directly in the feedback stepper form on the landing page. We prioritize user requests for upcoming drops — your feedback literally shapes our next releases.',
  },
  {
    question: 'What\'s a "Golden Member"?',
    answer:
      'Golden Members are early supporters who join before launch. They get lifetime perks — like +15% credits on every refill, early access to new templates, and exclusive beta projects.',
  },
  {
    question: 'When will SceneYard officially launch?',
    answer:
      'We\'re opening early access soon. Joining the waitlist ensures you\'re among the first to explore the library and claim Golden Member perks.',
  },
  {
    question: 'Can I get notified when new templates drop?',
    answer:
      'Yes! All waitlisted users get first-access notifications when new drops go live — before they\'re public.',
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
        <span className={`text-sm sm:text-base font-semibold pr-8 transition-colors ${
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
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base pl-4">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted">
            Everything you need to know about SceneYard
          </p>
        </div>

        <div
          className={`bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
          style={{ transitionDelay: '200ms' }}
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

        <div className={`mt-12 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-accent/10 via-blue-50 to-purple-50 border-2 border-accent/30 mb-8 overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="relative">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                Our Philosophy
              </div>
              <p className="text-xl sm:text-2xl font-bold text-foreground leading-relaxed mb-2">
                SceneYard isn't about quantity — it's about quality, clarity, and creativity.
              </p>
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                We're building the cleanest, most usable After Effects library for professionals who move fast and demand polish.
              </p>
            </div>
          </div>
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
