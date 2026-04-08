import { type HTMLAttributes, type ReactNode } from 'react';
import styles from './Progress.module.css';

export type ProgressBarTheme = 'accent' | 'neutral' | 'status';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress value 0–100 */
  value: number;
  /** Color theme. Status auto-colors by value range (red→yellow→green) */
  theme?: ProgressBarTheme;
  /** Optional label shown to the right of the bar */
  label?: ReactNode;
}

export function ProgressBar({
  value,
  theme = 'neutral',
  label,
  className,
  ...rest
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  const fillClass = [
    styles['bar-fill'],
    theme === 'status' ? styles[`bar-fill-status-${getStatusRange(clamped)}`] : styles[`bar-fill-${theme}`],
  ].join(' ');

  return (
    <div className={[styles['bar-root'], className ?? ''].filter(Boolean).join(' ')} {...rest}>
      <div className={styles['bar-track']}>
        <div className={fillClass} style={{ width: `${clamped}%` }} />
      </div>
      {label != null && <span className={styles['bar-label']}>{label}</span>}
    </div>
  );
}

function getStatusRange(value: number): 'low' | 'medium' | 'high' {
  if (value <= 25) return 'low';
  if (value <= 60) return 'medium';
  return 'high';
}

ProgressBar.displayName = 'ProgressBar';
