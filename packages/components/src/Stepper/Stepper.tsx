import { type HTMLAttributes } from 'react';
import { Check, InfoOctagon } from '@zen/icons/solid';
import styles from './Stepper.module.css';

export type StepStatus = 'pending' | 'active' | 'completed' | 'error';
export type StepperOrientation = 'horizontal' | 'vertical';

export interface StepperStep {
  title: string;
  subtitle?: string;
}

export interface StepperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  steps: StepperStep[];
  currentStep?: number;
  errorSteps?: number[];
  orientation?: StepperOrientation;
}

function getStatus(index: number, currentStep: number, errorSteps: number[]): StepStatus {
  if (errorSteps.includes(index)) return 'error';
  if (index < currentStep) return 'completed';
  if (index === currentStep) return 'active';
  return 'pending';
}

// Line before indicator: dark only if previous step is completed
function lineBeforeClass(prevStatus: StepStatus | null, isFirst: boolean): string {
  if (isFirst) return styles['line-hidden'];
  return prevStatus === 'completed' ? styles['line-v-dark'] : '';
}

// Line after indicator: dark only if this step is completed
function lineAfterClass(status: StepStatus, isLast: boolean): string {
  if (isLast) return styles['line-hidden'];
  return status === 'completed' ? styles['line-v-dark'] : '';
}

function StepIndicator({ status, stepNumber }: { status: StepStatus; stepNumber: number }) {
  return (
    <div className={[styles.indicator, styles[`indicator-${status}`]].join(' ')}>
      {(status === 'active' || status === 'error') && (
        <span className={[styles['focus-ring'], styles[`focus-ring-${status}`]].join(' ')} />
      )}
      {status === 'pending' && (
        <span className={[styles['step-number'], styles['step-number-pending']].join(' ')}>{stepNumber}</span>
      )}
      {status === 'active' && (
        <span className={[styles['step-number'], styles['step-number-active']].join(' ')}>{stepNumber}</span>
      )}
      {status === 'completed' && <Check size={16} />}
      {status === 'error' && <InfoOctagon size={16} />}
    </div>
  );
}

interface StepProps {
  step: StepperStep;
  status: StepStatus;
  prevStatus: StepStatus | null;
  stepNumber: number;
  isFirst: boolean;
  isLast: boolean;
  orientation: StepperOrientation;
}

function StepHorizontal({ step, status, prevStatus, stepNumber, isFirst, isLast }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles['step-row']}>
        <span className={[styles.line, lineBeforeClass(prevStatus, isFirst)].filter(Boolean).join(' ')} />
        <StepIndicator status={status} stepNumber={stepNumber} />
        <span className={[styles.line, lineAfterClass(status, isLast)].filter(Boolean).join(' ')} />
      </div>
      <div className={styles.content}>
        <span className={[styles.title, status === 'error' ? styles['title-error'] : ''].filter(Boolean).join(' ')}>
          {step.title}
        </span>
        {step.subtitle && (
          <span className={[styles.subtitle, status === 'error' ? styles['subtitle-error'] : ''].filter(Boolean).join(' ')}>
            {step.subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

function StepVertical({ step, status, prevStatus, stepNumber, isFirst, isLast }: StepProps) {
  return (
    <div className={styles['step-v']}>
      <div className={styles['step-v-col']}>
        <span className={[styles['line-v'], lineBeforeClass(prevStatus, isFirst)].filter(Boolean).join(' ')} />
        <StepIndicator status={status} stepNumber={stepNumber} />
        <span className={[styles['line-v'], lineAfterClass(status, isLast)].filter(Boolean).join(' ')} />
      </div>
      <div className={styles['content-v']}>
        <span className={[styles.title, status === 'error' ? styles['title-error'] : ''].filter(Boolean).join(' ')}>
          {step.title}
        </span>
        {step.subtitle && (
          <span className={[styles.subtitle, status === 'error' ? styles['subtitle-error'] : ''].filter(Boolean).join(' ')}>
            {step.subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

export function Stepper({
  steps,
  currentStep = 0,
  errorSteps = [],
  orientation = 'horizontal',
  className,
  ...rest
}: StepperProps) {
  const rootClass = [
    styles.root,
    orientation === 'vertical' ? styles['root-vertical'] : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const statuses = steps.map((_, i) => getStatus(i, currentStep, errorSteps));

  return (
    <div className={rootClass} {...rest}>
      {steps.map((step, i) => {
        const props: StepProps = {
          step,
          status: statuses[i],
          prevStatus: i === 0 ? null : statuses[i - 1],
          stepNumber: i + 1,
          isFirst: i === 0,
          isLast: i === steps.length - 1,
          orientation,
        };
        return orientation === 'vertical'
          ? <StepVertical key={i} {...props} />
          : <StepHorizontal key={i} {...props} />;
      })}
    </div>
  );
}

Stepper.displayName = 'Stepper';
