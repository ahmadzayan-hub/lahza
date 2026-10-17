import React from 'react';

interface Step {
  label: string;
  description?: string;
}

interface EnhancedStepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (index: number) => void;
}

export const EnhancedStepper: React.FC<EnhancedStepperProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  return (
    <div className="flex justify-between items-center my-12 gap-2">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 flex-1 relative cursor-pointer group"
          onClick={() => onStepClick?.(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onStepClick?.(index);
            }
          }}
        >
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`absolute top-5 h-0.5 transition-all duration-300 z-0 ${
                index < currentStep
                  ? 'bg-amber-700 dark:bg-amber-400'
                  : 'bg-stone-300 dark:bg-stone-700'
              }`}
              style={{
                left: 'calc(50% + 20px)',
                right: 'calc(-50% + 20px)',
              }}
            />
          )}

          {/* Step Circle */}
          <div
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-300 relative z-10 group-hover:scale-110 ${
              index <= currentStep
                ? 'bg-amber-700 dark:bg-amber-400 border-amber-700 dark:border-amber-400 text-white dark:text-stone-900'
                : 'bg-stone-200 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400'
            }`}
          >
            {index < currentStep ? '✓' : index + 1}
          </div>

          {/* Label */}
          <span
            className={`text-xs font-medium text-center transition-colors duration-300 whitespace-nowrap ${
              index <= currentStep
                ? 'text-amber-700 dark:text-amber-400'
                : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            {step.label}
          </span>

          {step.description && (
            <span className="text-xs text-stone-500 dark:text-stone-500 text-center hidden group-hover:block max-w-xs">
              {step.description}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
