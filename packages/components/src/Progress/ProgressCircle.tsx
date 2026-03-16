import { type HTMLAttributes, type ReactNode } from 'react';
import { Check } from '@zen/icons/line';
import styles from './Progress.module.css';

export type ProgressCircleTheme = 'accent' | 'neutral';
export type ProgressCircleSize = 'm' | 's';

export interface ProgressCircleProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress value 0–100. At 100 the done state is shown automatically */
  value: number;
  /** Size: m = 32px, s = 20px */
  size?: ProgressCircleSize;
  /** Color theme */
  theme?: ProgressCircleTheme;
  /** Optional label shown to the right */
  label?: ReactNode;
}

export function ProgressCircle({
  value,
  size = 'm',
  theme = 'accent',
  label,
  className,
  ...rest
}: ProgressCircleProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const done = clamped >= 100;

  const dim = size === 'm' ? 32 : 20;
  const r = size === 'm' ? 13 : 8;
  const sw = size === 'm' ? 3 : 2;
  const cx = dim / 2;
  const circumference = 2 * Math.PI * r;
  const arcLength = (clamped / 100) * circumference;
  const gapLength = circumference - arcLength;

  return (
    <div
      className={[styles['circle-root'], className ?? ''].filter(Boolean).join(' ')}
      {...rest}
    >
      {done ? (
        <div
          className={[
            styles['circle-done'],
            styles[`circle-done-${size}`],
            styles[`circle-done-${theme}`],
          ].join(' ')}
        >
          <Check size={size === 'm' ? 16 : 12} />
        </div>
      ) : (
        <svg
          width={dim}
          height={dim}
          viewBox={`0 0 ${dim} ${dim}`}
          fill="none"
          className={[styles['circle-svg'], styles[`circle-svg-${theme}`]].join(' ')}
        >
          {/* Track ring */}
          <circle
            cx={cx}
            cy={cx}
            r={r}
            stroke="var(--_circle-track)"
            strokeWidth={sw}
          />
          {/* Progress arc — starts from top */}
          {clamped > 0 && (
            <circle
              cx={cx}
              cy={cx}
              r={r}
              stroke="var(--_circle-fill)"
              strokeWidth={sw}
              strokeLinecap="round"
              strokeDasharray={`${arcLength} ${gapLength}`}
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
          )}
        </svg>
      )}
      {label != null && <span className={styles['circle-label']}>{label}</span>}
    </div>
  );
}

ProgressCircle.displayName = 'ProgressCircle';
