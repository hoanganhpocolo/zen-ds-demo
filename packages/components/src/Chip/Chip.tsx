import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Chip.module.css';

export type ChipSize = 's' | 'm';
export type ChipLevel = 'primary' | 'secondary';

export interface ChipProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Chip label text */
  label: string;
  /** Size variant */
  size?: ChipSize;
  /** Visual level */
  level?: ChipLevel;
  /** Selected state */
  selected?: boolean;
  /** Leading element (icon, photo, avatar) */
  leading?: ReactNode;
  /** Trailing element (avatar or custom ReactNode) */
  trailing?: ReactNode;
  /** Show dropdown chevron */
  dropdown?: boolean;
  /** Called when remove (×) is clicked */
  onRemove?: () => void;
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      label,
      size = 'm',
      level = 'primary',
      selected = false,
      leading,
      trailing,
      dropdown,
      onRemove,
      disabled,
      className,
      ...rest
    },
    ref,
  ) => {
    const hasCustomized = !!(leading || trailing || onRemove || dropdown);

    const rootClassNames = [
      styles.root,
      styles[`size-${size}`],
      styles[`level-${level}`],
      selected ? styles.selected : styles.unselected,
      hasCustomized ? styles.customized : '',
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        className={rootClassNames}
        disabled={disabled}
        {...rest}
      >
        {leading && <span className={styles.leading}>{leading}</span>}
        <span className={styles.label}>{label}</span>
        {trailing && <span className={styles.trailing}>{trailing}</span>}
        {dropdown && (
          <span className={styles.chevron}>
            <ChevronDownIcon size={size === 'm' ? 20 : 16} />
          </span>
        )}
        {onRemove && (
          <span
            role="button"
            className={styles.remove}
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            tabIndex={-1}
            aria-label="Remove"
          >
            <CloseIcon size={size === 'm' ? 16 : 12} />
          </span>
        )}
      </button>
    );
  },
);

Chip.displayName = 'Chip';

/* ── Inline SVG icons ── */

function ChevronDownIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
