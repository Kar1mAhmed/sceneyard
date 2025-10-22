'use client';

import { Check } from 'lucide-react';

export interface StepperStep {
  title: string;
  description?: string;
  content?: React.ReactNode;
}

interface StepperProps {
  steps: StepperStep[];
  currentStep: number;
  onStepChange?: (step: number) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export default function Stepper({
  steps,
  currentStep,
  onStepChange,
  orientation = 'vertical',
  className = '',
}: StepperProps) {
  const isStepComplete = (index: number) => index < currentStep;
  const isStepCurrent = (index: number) => index === currentStep;

  return (
    <div
      className={`${orientation === 'horizontal' ? 'flex items-start' : 'space-y-8'} ${className}`}
      role="list"
      aria-label="Progress steps"
    >
      {steps.map((step, index) => {
        const complete = isStepComplete(index);
        const current = isStepCurrent(index);

        return (
          <div
            key={index}
            className={`${
              orientation === 'horizontal'
                ? 'flex-1 flex flex-col items-center'
                : 'flex gap-4'
            }`}
            role="listitem"
            aria-current={current ? 'step' : undefined}
          >
            {/* Step indicator */}
            <div
              className={`${
                orientation === 'horizontal' ? 'mb-4' : ''
              } flex items-center gap-4`}
            >
              <button
                onClick={() => onStepChange?.(index)}
                disabled={!onStepChange}
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full
                  border-2 transition-all duration-300 shrink-0
                  ${
                    complete
                      ? 'bg-accent border-accent text-white'
                      : current
                      ? 'border-accent text-accent bg-transparent'
                      : 'border-border text-muted bg-transparent'
                  }
                  ${onStepChange ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
                  focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background
                `}
                aria-label={`Step ${index + 1}: ${step.title}`}
                tabIndex={onStepChange ? 0 : -1}
              >
                {complete ? (
                  <Check className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <span className="font-semibold">{index + 1}</span>
                )}
              </button>

              {/* Connector line (horizontal) */}
              {orientation === 'horizontal' && index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 transition-colors duration-300 ${
                    complete ? 'bg-accent' : 'bg-border'
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Step content */}
            <div
              className={`${
                orientation === 'horizontal' ? 'text-center' : 'flex-1'
              }`}
            >
              <h3
                className={`font-semibold text-lg mb-1 transition-colors ${
                  current ? 'text-foreground' : 'text-muted'
                }`}
              >
                {step.title}
              </h3>
              {step.description && (
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              )}
              {step.content && current && (
                <div className="mt-4">{step.content}</div>
              )}
            </div>

            {/* Connector line (vertical) */}
            {orientation === 'vertical' && index < steps.length - 1 && (
              <div
                className={`w-0.5 h-full min-h-[40px] ml-5 transition-colors duration-300 ${
                  complete ? 'bg-accent' : 'bg-border'
                }`}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
