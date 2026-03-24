import { type HTMLAttributes } from 'react';
import { XSmall } from '@zen/icons/line';
import styles from './Badge.module.css';

export type BadgeColor =
  // Semantic aliases (backward-compatible)
  | 'neutral'
  | 'accent'
  | 'info'       // → blue
  | 'positive'   // → green
  | 'negative'   // → red
  | 'warning'    // → yellow
  // Figma palette (full set)
  | 'yellow'
  | 'orange'
  | 'red'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'brown'
  | 'inverse';

export type BadgeVariant = 'solid' | 'subtle' | 'ghost';
export type BadgeSize = 'm' | 's';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge label text */
  label: string;
  /** Color theme */
  color?: BadgeColor;
  /** Visual style */
  variant?: BadgeVariant;
  /** Size */
  size?: BadgeSize;
  /** Leading icon. Pass a ReactNode to show custom icon, or omit to show the default dot. */
  icon?: React.ReactNode;
  /** Show the default dot indicator (ignored when `icon` is provided). Defaults to true. */
  dot?: boolean;
  /** Show a remove/close button. Called when user clicks ×. */
  onRemove?: () => void;
}

/** Semantic aliases → canonical color key */
const COLOR_ALIAS: Record<string, string> = {
  info: 'blue',
  positive: 'green',
  negative: 'red',
  warning: 'yellow',
};

export function Badge({
  label,
  color = 'neutral',
  variant = 'subtle',
  size = 'm',
  icon,
  dot = true,
  onRemove,
  className,
  ...rest
}: BadgeProps) {
  const canonicalColor = COLOR_ALIAS[color] ?? color;

  const rootClass = [
    styles.root,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    styles[`color-${canonicalColor}`],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const showDot = !icon && dot;
  const iconSize = size === 'm' ? 16 : 12;

  return (
    <span className={rootClass} {...rest}>
      {(icon || showDot) && (
        <span className={styles.leading}>
          {icon
            ? <span className={styles['leading-icon']}>{icon}</span>
            : <span className={styles[`dot-${size}`]} />
          }
        </span>
      )}
      <span className={styles['text-wrapper']}>
        <span className={styles.label}>{label}</span>
      </span>
      {onRemove && (
        <button
          type="button"
          className={styles['remove-btn']}
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          aria-label="Remove"
        >
          <XSmall size={iconSize} />
        </button>
      )}
    </span>
  );
}

Badge.displayName = 'Badge';
