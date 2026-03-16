import { type HTMLAttributes } from 'react';
import styles from './Badge.module.css';

export type BadgeColor = 'neutral' | 'accent' | 'info' | 'positive' | 'negative' | 'warning';
export type BadgeVariant = 'solid' | 'subtle' | 'ghost';
export type BadgeSize = 'm' | 's';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge label text */
  label: string;
  /** Color variant */
  color?: BadgeColor;
  /** Visual style */
  variant?: BadgeVariant;
  /** Size */
  size?: BadgeSize;
}

export function Badge({
  label,
  color = 'neutral',
  variant = 'subtle',
  size = 'm',
  className,
  ...rest
}: BadgeProps) {
  const rootClass = [
    styles.root,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={rootClass} {...rest}>
      <span className={styles[`dot-${size}`]} />
      <span className={styles.label}>{label}</span>
    </span>
  );
}

Badge.displayName = 'Badge';
