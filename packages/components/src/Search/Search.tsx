import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  type InputHTMLAttributes,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { SearchMedium } from '@zen/icons/line';
import { XCircle } from '@zen/icons/solid';
import { ChevronDown, Settings03 } from '@zen/icons/line';
import styles from './Search.module.css';

export type SearchTheme = 'default' | 'filter-dropdown' | 'filter-icon';
export type SearchSize = 'default' | 'small';

export interface SearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** Controlled input value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Called when user presses Enter */
  onSearch?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Size variant */
  size?: SearchSize;
  /** Visual theme */
  theme?: SearchTheme;
  /** Show the search icon on the left */
  showSearchIcon?: boolean;
  /** Label shown in the filter-dropdown trailing (e.g. "All") */
  filterLabel?: string;
  /** Called when the filter button / settings icon is clicked */
  onFilterClick?: () => void;
  /** Extra content appended to the trailing area (default theme) */
  trailing?: ReactNode;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      value,
      onChange,
      onSearch,
      placeholder = 'Search',
      size = 'default',
      theme = 'default',
      showSearchIcon = true,
      filterLabel = 'All',
      onFilterClick,
      trailing,
      className,
      ...rest
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = e.target.value;
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      },
      [isControlled, onChange],
    );

    const handleClear = useCallback(() => {
      if (!isControlled) setInternalValue('');
      onChange?.('');
    }, [isControlled, onChange]);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onSearch?.(currentValue);
        rest.onKeyDown?.(e);
      },
      [currentValue, onSearch, rest],
    );

    const hasValue = currentValue.length > 0;

    const rootClasses = [
      styles.root,
      styles[`size-${size}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={rootClasses}>
        <div className={styles.container}>
          {/* Leading */}
          {showSearchIcon && (
            <span className={styles.leading}>
              <SearchMedium size={20} className={styles['search-icon']} />
            </span>
          )}

          {/* Input */}
          <input
            ref={ref}
            type="text"
            className={[styles.input, hasValue ? styles['input-filled'] : ''].filter(Boolean).join(' ')}
            value={currentValue}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            {...rest}
          />

          {/* Clear button */}
          {hasValue && (
            <button
              type="button"
              className={styles.clear}
              onClick={handleClear}
              tabIndex={-1}
              aria-label="Clear"
            >
              <XCircle size={20} />
            </button>
          )}

          {/* Trailing */}
          {theme === 'filter-dropdown' && (
            <button
              type="button"
              className={styles.filter}
              onClick={onFilterClick}
            >
              <span className={styles['filter-label']}>{filterLabel}</span>
              <ChevronDown size={16} />
            </button>
          )}

          {theme === 'filter-icon' && (
            <button
              type="button"
              className={styles.filter}
              onClick={onFilterClick}
              aria-label="Filter"
            >
              <Settings03 size={20} />
            </button>
          )}

          {theme === 'default' && trailing && (
            <span className={styles.trailing}>{trailing}</span>
          )}

          {/* Inner shadow overlay */}
          <span className={styles['inner-shadow']} aria-hidden />
        </div>
      </div>
    );
  },
);

Search.displayName = 'Search';
