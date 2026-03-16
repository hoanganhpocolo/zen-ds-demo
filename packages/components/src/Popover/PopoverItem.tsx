import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { Check } from '@zen/icons/line';
import styles from './Popover.module.css';

export interface PopoverItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Highlights the item as selected and shows a check icon */
  selected?: boolean;
  /** Leading slot — icon, avatar, photo, dock-icon, color dot, etc. */
  leading?: ReactNode;
  /** Primary label text */
  label?: ReactNode;
  /** Optional secondary caption */
  caption?: ReactNode;
  /** Trailing slot — badge, checkbox, etc. When provided, trailing is always shown (even when selected) and no check icon is rendered */
  trailing?: ReactNode;
  /** Hide the check icon slot entirely — use for action menus that have no selection state */
  noCheck?: boolean;
  /** Disable interaction */
  disabled?: boolean;
}

export const PopoverItem = forwardRef<HTMLDivElement, PopoverItemProps>(
  (
    {
      selected = false,
      leading,
      label,
      caption,
      trailing,
      noCheck = false,
      disabled = false,
      className,
      children,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const containerClass = [
      styles.item,
      selected && !trailing ? styles['item-selected'] : '',
      selected && trailing ? styles['item-selected-with-trailing'] : '',
      disabled ? styles['item-disabled'] : '',
      className ?? '',
    ].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={containerClass}
        onClick={disabled ? undefined : onClick}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick?.(e as any);
          }
        }}
        {...rest}
      >
        {/* Content slot — custom children override entire content area */}
        {children ?? (
          <div className={styles['item-content']}>
            {/* Leading */}
            {leading && (
              <div className={styles['item-leading']}>{leading}</div>
            )}

            {/* Label + Caption */}
            {(label != null || caption != null) && (
              <div className={styles['item-text']}>
                {label != null && (
                  <span className={styles['item-label']}>{label}</span>
                )}
                {caption != null && (
                  <span className={styles['item-caption']}>{caption}</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Trailing: trailing slot > check icon (unless noCheck) */}
        {trailing ? (
          <div className={styles['item-trailing']}>{trailing}</div>
        ) : !noCheck ? (
          <div className={styles['item-check']} style={selected ? undefined : { visibility: 'hidden' }}>
            <Check size={16} />
          </div>
        ) : null}
      </div>
    );
  },
);

PopoverItem.displayName = 'PopoverItem';
