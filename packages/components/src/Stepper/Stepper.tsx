import { type HTMLAttributes, type ReactNode } from 'react';
import { Check } from '@zen/icons/solid';
import { InfoOctagon } from '@zen/icons/solid';
import styles from './Stepper.module.css';

export type StepStatus = 'pending' | 'active' | 'completed' | 'error';

export interface StepperStep {
  title: string;
  subtitle?: string;
}

export interface StepperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Array of step definitions */
  steps: StepperStep[];
  /** 0-based index of the current active step */
  currentStep?: number;
  /** 0-based indices of steps in error state */
  errorSteps?: number[];
}

function getStatus(index: number, currentStep: number, errorSteps: number[]): StepStatus {
  if (errorSteps.includes(index)) return 'error';
  if (index < currentStep) return 'completed';
  if (index === currentStep) return 'active';
  return 'pending';
}

interface StepIndicatorProps {
  status: StepStatus;
  stepNumber: number;
}

function StepIndicator({ status, stepNumber }: StepIndicatorProps) {
  const containerClass = [
    styles.indicator,
    styles[`indicator-${status}`],
  ].join(' ');

  return (
    <div className={containerClass}>
      {(status === 'active' || status === 'error') && (
        <span className={[styles['focus-ring'], styles[`focus-ring-${status}`]].join(' ')} />
      )}

      {status === 'pending' && (
        <span className={[styles['step-number'], styles['step-number-pending']].join(' ')}>
          {stepNumber}
        </span>
      )}

      {status === 'active' && (
        <span className={[styles['step-number'], styles['step-number-active']].join(' ')}>
          {stepNumber}
        </span>
      )}

      {status === 'completed' && (
        <Check size={16} />
      )}

      {status === 'error' && (
        <InfoOctagon size={16} />
      )}
    </div>
  );
}

interface StepProps {
  step: StepperStep;
  status: StepStatus;
  stepNumber: number;
  isFirst: boolean;
  isLast: boolean;
}

function Step({ step, status, stepNumber, isFirst, isLast }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles['step-row']}>
        <span className={[styles.line, isFirst ? styles['line-hidden'] : ''].filter(Boolean).join(' ')} />
        <StepIndicator status={status} stepNumber={stepNumber} />
        <span className={[styles.line, isLast ? styles['line-hidden'] : ''].filter(Boolean).join(' ')} />
      </div>
      <div className={styles.content}>
        <span className={[styles.title, status === 'error' ? styles['title-error'] : ''].filter(Boolean).join(' ')}>
          {step.title}
        </span>
        {step.subtitle && (
          <span className={styles.subtitle}>{step.subtitle}</span>
        )}
      </div>
    </div>
  );
}

export function Stepper({
  steps,
  currentStep = 0,
  errorSteps = [],
  className,
  ...rest
}: StepperProps) {
  return (
    <div className={[styles.root, className ?? ''].filter(Boolean).join(' ')} {...rest}>
      {steps.map((step, i) => (
        <Step
          key={i}
          step={step}
          status={getStatus(i, currentStep, errorSteps)}
          stepNumber={i + 1}
          isFirst={i === 0}
          isLast={i === steps.length - 1}
        />
      ))}
    </div>
  );
}

Stepper.displayName = 'Stepper';
