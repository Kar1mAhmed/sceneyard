'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Gift, Check } from 'lucide-react';

interface FormData {
  email: string;
  referralCode: string;
  features: string[];
  pricingStyle: string;
  demoRating: number;
  monthlyBudget: string;
}

const FEATURES_OPTIONS = [
  'High-quality AE templates library',
  'Early access to new drops',
  'Personal dashboard with downloads history',
  'Referral program (earn credits)',
  'Tutorials or learning content',
  'Creator marketplace (upload & sell)',
];

const PRICING_OPTIONS = [
  'Monthly subscription with credits',
  'Pay-per-template (credits only)',
  'Not sure yet',
];

const BUDGET_OPTIONS = [
  'Under $10',
  '$10–$25',
  '$20–$50',
  'Over $50',
];

export default function MultiStepWaitlistForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    referralCode: '',
    features: [],
    pricingStyle: '',
    demoRating: 0,
    monthlyBudget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = 5;

  const saveProgress = async (field: keyof FormData, value: any) => {
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          [field]: value,
        }),
      });
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  const handleEmailSubmit = async () => {
    if (!formData.email) return;
    await saveProgress('email', formData.email);
    setStep(2);
  };

  const handleFeaturesSubmit = async () => {
    await saveProgress('features', formData.features);
    setStep(3);
  };

  const handlePricingSubmit = async () => {
    await saveProgress('pricingStyle', formData.pricingStyle);
    setStep(4);
  };

  const handleRatingSubmit = async () => {
    await saveProgress('demoRating', formData.demoRating);
    setStep(5);
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          completed: true,
        }),
      });
      setIsCompleted(true);
    } catch (error) {
      console.error('Failed to submit:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = async () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleFinalSubmit();
    }
  };

  const toggleFeature = (feature: string) => {
    const newFeatures = formData.features.includes(feature)
      ? formData.features.filter(f => f !== feature)
      : formData.features.length < 3
      ? [...formData.features, feature]
      : formData.features;
    
    setFormData({ ...formData, features: newFeatures });
  };

  if (isCompleted) {
    return (
      <div className="bg-white border border-[var(--border)] rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          You're on the list! 🎉
        </h3>
        <p className="text-muted mb-4">
          Check your email for confirmation and get ready for 10 extra credits when we launch!
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
          <Gift className="w-4 h-4" />
          10 bonus credits unlocked
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted">
            Question {step} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-accent">
            {Math.round((step / totalSteps) * 100)}% complete
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Reward Banner */}
      <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
        <div className="flex items-center gap-2 text-sm font-semibold text-yellow-800">
          <Gift className="w-5 h-5" />
          Complete the form to get 10 extra credits when we launch!
        </div>
      </div>

      {/* Step 1: Email */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              What's your email?
            </h3>
            <p className="text-sm text-muted mb-4">
              We'll send you updates and your bonus credits
            </p>
          </div>
          <div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="your@email.com"
              required
            />
          </div>
          {/* <div>
            <input
              type="text"
              value={formData.referralCode}
              onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
              className="w-full px-5 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border)] text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Referral code (optional)"
            />
          </div> */}
          <button
            onClick={handleEmailSubmit}
            disabled={!formData.email}
            className="w-full px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Step 2: Features */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Which features excite you the most?
            </h3>
            <p className="text-sm text-muted mb-4">
              Choose up to 3 features
            </p>
          </div>
          <div className="space-y-3">
            {FEATURES_OPTIONS.map((feature) => (
              <button
                key={feature}
                onClick={() => toggleFeature(feature)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  formData.features.includes(feature)
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    formData.features.includes(feature)
                      ? 'border-accent bg-accent'
                      : 'border-gray-300'
                  }`}>
                    {formData.features.includes(feature) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 rounded-xl border border-gray-300 text-foreground font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={handleFeaturesSubmit}
              className="flex-1 px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleSkip}
              className="px-6 py-3 rounded-xl text-muted hover:text-foreground transition-all"
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Pricing */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Which pricing style do you prefer?
            </h3>
            <p className="text-sm text-muted mb-4">
              Help us design the best pricing for you
            </p>
          </div>
          <div className="space-y-3">
            {PRICING_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => setFormData({ ...formData, pricingStyle: option })}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  formData.pricingStyle === option
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.pricingStyle === option
                      ? 'border-accent'
                      : 'border-gray-300'
                  }`}>
                    {formData.pricingStyle === option && (
                      <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground">{option}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 rounded-xl border border-gray-300 text-foreground font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={handlePricingSubmit}
              className="flex-1 px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleSkip}
              className="px-6 py-3 rounded-xl text-muted hover:text-foreground transition-all"
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Rating */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              What is your rating for our demo templates?
            </h3>
            <p className="text-sm text-muted mb-4">
              1 = Poor, 10 = Excellent
            </p>
          </div>
          <div className="flex justify-between gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
              <button
                key={rating}
                onClick={() => setFormData({ ...formData, demoRating: rating })}
                className={`flex-1 aspect-square rounded-xl border-2 font-bold transition-all ${
                  formData.demoRating === rating
                    ? 'border-accent bg-accent text-white scale-110'
                    : 'border-gray-200 text-muted hover:border-accent/50 hover:scale-105'
                }`}
              >
                {rating}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 rounded-xl border border-gray-300 text-foreground font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={handleRatingSubmit}
              className="flex-1 px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleSkip}
              className="px-6 py-3 rounded-xl text-muted hover:text-foreground transition-all"
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Budget */}
      {step === 5 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              How much would you pay per month?
            </h3>
            <p className="text-sm text-muted mb-4">
              For premium templates with unlimited downloads
            </p>
          </div>
          <div className="space-y-3">
            {BUDGET_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => setFormData({ ...formData, monthlyBudget: option })}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  formData.monthlyBudget === option
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.monthlyBudget === option
                      ? 'border-accent'
                      : 'border-gray-300'
                  }`}>
                    {formData.monthlyBudget === option && (
                      <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground">{option}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStep(4)}
              className="px-6 py-3 rounded-xl border border-gray-300 text-foreground font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
              className="flex-1 px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Complete & Join Waitlist'}
            </button>
            <button
              onClick={handleSkip}
              disabled={isSubmitting}
              className="px-6 py-3 rounded-xl text-muted hover:text-foreground transition-all disabled:opacity-50"
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {/* Terms */}
      <p className="text-xs text-muted text-center mt-6">
        By joining, you agree to receive updates about SceneYard. Unsubscribe anytime.
      </p>
    </div>
  );
}
