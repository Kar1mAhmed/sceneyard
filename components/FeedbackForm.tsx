'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface FeedbackData {
  email: string;
  consent: boolean;
  templates: string[];
  frequency: string;
  sellTemplates: string;
  comments: string;
}

const templateOptions = [
  'Titles',
  'Openers',
  'Transitions',
  'Lower-thirds',
  'Logo Stings',
  'Social Promo',
];

const frequencyOptions = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'occasionally', label: 'Occasionally' },
];

const sellOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'maybe', label: 'Maybe' },
  { value: 'no', label: 'No' },
];

export default function FeedbackForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FeedbackData>({
    email: '',
    consent: false,
    templates: [],
    frequency: '',
    sellTemplates: '',
    comments: '',
  });

  const handleTemplateToggle = (template: string) => {
    setFormData((prev) => ({
      ...prev,
      templates: prev.templates.includes(template)
        ? prev.templates.filter((t) => t !== template)
        : [...prev.templates, template],
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
  };

  const canProceedStep0 = formData.email !== '';
  const canProceedStep1 = formData.templates.length > 0;
  const canProceedStep2 = formData.frequency !== '';
  const canProceedStep3 = formData.sellTemplates !== '';

  if (submitted) {
    return (
      <section id="feedback" className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
            <CheckCircle className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-xl text-muted mb-2">
            Your feedback shapes the product.
          </p>
          <p className="text-lg text-muted">
            We'll notify you when early access opens.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="feedback" className="relative py-8 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Help Us Build SceneYard
          </h2>
          <p className="text-xl text-muted">
            Tell us what you need and shape the future of the platform
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[0, 1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                step === currentStep
                  ? 'w-12 bg-accent'
                  : step < currentStep
                  ? 'w-8 bg-accent/50'
                  : 'w-8 bg-border'
              }`}
            />
          ))}
        </div>

        <div className="bg-white border-2 border-[var(--border)] rounded-2xl p-8 sm:p-12 shadow-lg">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Step 0: Email & Consent */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Let's get started
                  </h3>
                  <p className="text-muted">
                    First, we'll need your email to keep you updated
                  </p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                    Email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                    className="w-full px-6 py-4 text-lg rounded-xl bg-white border-2 border-[var(--border)] text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <p className="text-xs text-muted text-center">
                  By continuing, you agree to receive updates about SceneYard.
                </p>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceedStep0}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--card-bg)]"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 1: Template Preferences */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    What templates do you use most?
                  </h3>
                  <p className="text-muted">
                    Select all that apply
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {templateOptions.map((template) => (
                    <label
                      key={template}
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-[var(--border)] cursor-pointer hover:border-accent transition-all has-[:checked]:border-accent has-[:checked]:bg-blue-50"
                    >
                      <input
                        type="checkbox"
                        checked={formData.templates.includes(template)}
                        onChange={() => handleTemplateToggle(template)}
                        className="w-5 h-5 rounded border-[var(--border)] text-accent focus:ring-2 focus:ring-accent"
                      />
                      <span className="text-foreground font-medium">{template}</span>
                    </label>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl border-2 border-[var(--border)] text-foreground hover:bg-[var(--input-bg)] transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--card-bg)]"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceedStep1}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--card-bg)]"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Usage Frequency */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    How often do you create motion graphics?
                  </h3>
                  <p className="text-muted">
                    This helps us understand your workflow
                  </p>
                </div>

                <div className="space-y-3">
                  {frequencyOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-4 p-5 rounded-xl border-2 border-[var(--border)] cursor-pointer hover:border-accent transition-all has-[:checked]:border-accent has-[:checked]:bg-blue-50"
                    >
                      <input
                        type="radio"
                        name="frequency"
                        value={option.value}
                        checked={formData.frequency === option.value}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, frequency: e.target.value }))
                        }
                        className="w-5 h-5 border-[var(--border)] text-accent focus:ring-2 focus:ring-accent"
                      />
                      <span className="text-foreground font-medium text-lg">{option.label}</span>
                    </label>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl border-2 border-[var(--border)] text-foreground hover:bg-[var(--input-bg)] transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--card-bg)]"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceedStep2}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--card-bg)]"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Creator Interest */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Would you like to sell your templates?
                  </h3>
                  <p className="text-muted">
                    We're building a creator program
                  </p>
                </div>

                <div className="space-y-3">
                  {sellOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-4 p-5 rounded-xl border-2 border-[var(--border)] cursor-pointer hover:border-accent transition-all has-[:checked]:border-accent has-[:checked]:bg-blue-50"
                    >
                      <input
                        type="radio"
                        name="sellTemplates"
                        value={option.value}
                        checked={formData.sellTemplates === option.value}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, sellTemplates: e.target.value }))
                        }
                        className="w-5 h-5 border-[var(--border)] text-accent focus:ring-2 focus:ring-accent"
                      />
                      <span className="text-foreground font-medium text-lg">{option.label}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-semibold text-foreground mb-3">
                    Additional comments (optional)
                  </label>
                  <textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, comments: e.target.value }))
                    }
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-white border-2 border-[var(--border)] text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none transition-all"
                    placeholder="Tell us more about what you need..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl border-2 border-[var(--border)] text-foreground hover:bg-[var(--input-bg)] transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--card-bg)]"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceedStep3}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--card-bg)]"
                  >
                    Submit Feedback
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
