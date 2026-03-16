import { useState, type HTMLAttributes, type ReactNode } from 'react';
import styles from './Segmented.module.css';

export type SegmentedLevel = 'primary' | 'secondary';
export type SegmentedSize = 'medium';

export interface SegmentedItem {
  /** Unique value for this item */
  value: string;
  /** Label text */
  label: string;
  /** Optional leading icon */
  icon?: ReactNode;
  /** Disable this item */
  disabled?: boolean;
}

export interface SegmentedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Items to render */
  items: SegmentedItem[];
  /** Controlled selected value */
  value?: string;
  /** Uncontrolled default value */
  defaultValue?: string;
  /** Called when selection changes */
  onChange?: (value: string) => void;
  /** Visual level */
  level?: SegmentedLevel;
  /** Size variant */
  size?: SegmentedSize;
  /** Stretch to fill parent width */
  fullWidth?: boolean;
}

export function Segmented({
  items,
  value,
  defaultValue,
  onChange,
  level = 'secondary',
  size = 'medium',
  fullWidth = false,
  className,
  ...rest
}: SegmentedProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? items[0]?.value ?? '');
  const selected = isControlled ? value : internalValue;

  const handleSelect = (itemValue: string, disabled?: boolean) => {
    if (disabled) return;
    if (!isControlled) setInternalValue(itemValue);
    onChange?.(itemValue);
  };

  const rootClasses = [
    styles.root,
    styles[`level-${level}`],
    styles[`size-${size}`],
    fullWidth ? styles['full-width'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} {...rest}>
      <div className={styles['item-list']}>
        {items.map((item) => {
          const isSelected = selected === item.value;
          const itemClasses = [
            styles.item,
            isSelected ? styles['item-selected'] : styles['item-unselected'],
            item.disabled ? styles['item-disabled'] : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={isSelected}
              disabled={item.disabled}
              className={itemClasses}
              onClick={() => handleSelect(item.value, item.disabled)}
            >
              {item.icon && (
                <span className={styles['item-icon']}>{item.icon}</span>
              )}
              <span className={styles['item-label']}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

Segmented.displayName = 'Segmented';
