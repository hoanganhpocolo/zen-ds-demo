import {
  forwardRef,
  useRef,
  type ChangeEvent,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { SearchMedium } from '@zen/icons/line';
import styles from './Popover.module.css';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /** Show search input at the top */
  search?: boolean;
  /** Controlled search value */
  searchValue?: string;
  /** Callback when search input changes */
  onSearchChange?: (value: string) => void;
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Label text shown between search and items */
  label?: string;
  /** Max height of the item list before it scrolls */
  maxHeight?: number;
  children?: ReactNode;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      search = false,
      searchValue,
      onSearchChange,
      searchPlaceholder = 'Search',
      label,
      maxHeight,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div
        ref={ref}
        className={[styles.root, className ?? ''].filter(Boolean).join(' ')}
        role="listbox"
        {...rest}
      >
        {/* ── Search ── */}
        {search && (
          <div className={styles.search}>
            <div className={styles['search-inner']}>
              <SearchMedium size={20} className={styles['search-icon']} />
              <input
                ref={inputRef}
                type="text"
                className={styles['search-input']}
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onSearchChange?.(e.target.value)
                }
                aria-label={searchPlaceholder}
              />
            </div>
          </div>
        )}

        {/* ── Label ── */}
        {label && (
          <div className={styles['label-row']}>
            <span className={styles.label}>{label}</span>
          </div>
        )}

        {/* ── Item list ── */}
        <div
          className={styles['item-list']}
          style={maxHeight ? { maxHeight, overflowY: 'auto' } : undefined}
        >
          {children}
        </div>
      </div>
    );
  },
);

Popover.displayName = 'Popover';
