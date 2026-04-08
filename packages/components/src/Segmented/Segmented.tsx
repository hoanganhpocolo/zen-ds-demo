import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Segmented.module.css';

export type SegmentedLevel = 'primary' | 'secondary';
export type SegmentedSize = 'medium' | 'small';

export interface SegmentedItem {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SegmentedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: SegmentedItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  level?: SegmentedLevel;
  size?: SegmentedSize;
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

  const listRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const updateIndicator = useCallback(() => {
    if (!listRef.current) return;
    const buttons = listRef.current.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const idx = items.findIndex((i) => i.value === selected);
    if (idx < 0 || !buttons[idx]) return;
    const btn = buttons[idx];
    const listRect = listRef.current.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicator({
      left: btnRect.left - listRect.left,
      width: btnRect.width,
      ready: true,
    });
  }, [items, selected]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  // Re-measure on resize
  useEffect(() => {
    const ro = new ResizeObserver(updateIndicator);
    if (listRef.current) ro.observe(listRef.current);
    return () => ro.disconnect();
  }, [updateIndicator]);

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
      <div ref={listRef} className={styles['item-list']}>
        {/* Sliding indicator */}
        {indicator.ready && (
          <div
            className={[styles.indicator, styles[`indicator-${level}`]].join(' ')}
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
            }}
          />
        )}

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
              <span className={styles['label-wrapper']}>
                <span className={styles['item-label']}>{item.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

Segmented.displayName = 'Segmented';
