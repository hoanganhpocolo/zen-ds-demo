import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { FieldShell, type FieldHelpText } from '../FieldShell';
import { Popover, PopoverItem } from '../Popover';
import { Tag } from '../Tag';
import styles from './SelectField.module.css';

export type SelectFieldSize = 's' | 'm' | 'l' | 'xl';
export type SelectFieldMode = 'single' | 'multiple';

export interface SelectOption {
  value: string;
  label?: string;
  leading?: ReactNode;
  caption?: string;
  disabled?: boolean;
}

/* ── Single mode props ── */
interface SingleProps {
  mode?: 'single';
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, option: SelectOption) => void;
}

/* ── Multiple mode props ── */
interface MultipleProps {
  mode: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[], options: SelectOption[]) => void;
}

type ModeProps = SingleProps | MultipleProps;

export type SelectFieldProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
  label?: string;
  size?: SelectFieldSize;
  placeholder?: string;
  leading?: ReactNode;
  options?: SelectOption[];
  searchable?: boolean;
  searchPlaceholder?: string;
  helpText?: FieldHelpText | string;
  error?: boolean | string;
  disabled?: boolean;
  readOnly?: boolean;
  /** Show clear-all button */
  clearable?: boolean;
  /** Allow creating new options by typing (requires searchable + multiple) */
  creatable?: boolean;
  /** Called when a new option is created. Return the option to add, or void to use default. */
  onCreateOption?: (inputValue: string) => SelectOption | void;
  /** Max visible tags before showing +N counter. 'responsive' auto-fits to 1 row. Default: no limit. */
  maxTagCount?: number | 'responsive';
} & ModeProps;

/* ── Inline SVG icons ── */

function ChevronDownIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XCircleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="currentColor" />
    </svg>
  );
}

export const SelectField = forwardRef<HTMLDivElement, SelectFieldProps>(
  (props, ref) => {
    const {
      label,
      size = 'm',
      placeholder = 'Select...',
      leading,
      options = [],
      searchable = false,
      searchPlaceholder = 'Search...',
      helpText,
      error,
      disabled,
      readOnly,
      clearable = false,
      creatable = false,
      onCreateOption,
      maxTagCount,
      className,
      mode: _mode,
      value: _value,
      defaultValue: _defaultValue,
      onChange: _onChange,
      ...rest
    } = props as SelectFieldProps & Record<string, unknown>;

    const isMultiple = props.mode === 'multiple';

    /* ── State ── */
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const [createdOptions, setCreatedOptions] = useState<SelectOption[]>([]);

    // Single mode state
    const [singleInternal, setSingleInternal] = useState<string>(
      (!isMultiple ? (props as SingleProps).defaultValue : undefined) ?? '',
    );
    // Multiple mode state
    const [multiInternal, setMultiInternal] = useState<string[]>(
      (isMultiple ? (props as MultipleProps).defaultValue : undefined) ?? [],
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const fieldRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    /* ── Derived ── */
    const singleControlled = !isMultiple ? (props as SingleProps).value : undefined;
    const multiControlled = isMultiple ? (props as MultipleProps).value : undefined;

    const isSingleControlled = singleControlled !== undefined;
    const isMultiControlled = multiControlled !== undefined;

    const currentSingle = isSingleControlled ? singleControlled : singleInternal;
    const currentMulti = isMultiControlled ? multiControlled : multiInternal;

    // Merge provided options + user-created options
    const allOptions = [...options, ...createdOptions.filter((co) => !options.some((o) => o.value === co.value))];

    const selectedOption = !isMultiple ? allOptions.find((o) => o.value === currentSingle) : undefined;
    const selectedOptions = isMultiple ? allOptions.filter((o) => currentMulti.includes(o.value)) : [];

    const filteredOptions = search
      ? allOptions.filter((o) => (o.label ?? o.value).toLowerCase().includes(search.toLowerCase()))
      : allOptions;

    // Check if search text matches any existing option
    const searchMatchesExisting = search
      ? allOptions.some((o) => (o.label ?? o.value).toLowerCase() === search.toLowerCase())
      : true;
    const canCreate = creatable && searchable && isMultiple && search.trim() && !searchMatchesExisting;

    /* ── Handlers ── */
    const openDropdown = useCallback(() => {
      if (disabled || readOnly) return;
      setOpen(true);
      setSearch('');
      setHighlightIndex(-1);
      if (searchable) {
        requestAnimationFrame(() => { inputRef.current?.focus(); inputRef.current?.select(); });
      }
    }, [disabled, readOnly, searchable]);

    const closeDropdown = useCallback(() => {
      setOpen(false);
      setSearch('');
      setHighlightIndex(-1);
    }, []);

    const handleToggle = useCallback(() => {
      if (open) closeDropdown(); else openDropdown();
    }, [open, openDropdown, closeDropdown]);

    const handleSelectSingle = useCallback(
      (option: SelectOption) => {
        if (option.disabled) return;
        if (!isSingleControlled) setSingleInternal(option.value);
        (props as SingleProps).onChange?.(option.value, option);
        closeDropdown();
      },
      [isSingleControlled, props, closeDropdown],
    );

    const handleToggleMulti = useCallback(
      (option: SelectOption) => {
        if (option.disabled) return;
        const prev = isMultiControlled ? multiControlled : multiInternal;
        const next = prev.includes(option.value)
          ? prev.filter((v) => v !== option.value)
          : [...prev, option.value];
        if (!isMultiControlled) setMultiInternal(next);
        const nextOptions = options.filter((o) => next.includes(o.value));
        (props as MultipleProps).onChange?.(next, nextOptions);
      },
      [isMultiControlled, multiControlled, multiInternal, options, props],
    );

    const handleRemoveTag = useCallback(
      (value: string) => {
        const prev = isMultiControlled ? multiControlled : multiInternal;
        const next = prev.filter((v) => v !== value);
        if (!isMultiControlled) setMultiInternal(next);
        const nextOptions = options.filter((o) => next.includes(o.value));
        (props as MultipleProps).onChange?.(next, nextOptions);
      },
      [isMultiControlled, multiControlled, multiInternal, options, props],
    );

    const handleClearAll = useCallback(() => {
      if (isMultiple) {
        if (!isMultiControlled) setMultiInternal([]);
        (props as MultipleProps).onChange?.([], []);
      } else {
        if (!isSingleControlled) setSingleInternal('');
        (props as SingleProps).onChange?.('', { value: '', label: '' });
      }
    }, [isMultiple, isMultiControlled, isSingleControlled, props]);

    const handleCreateOption = useCallback(() => {
      if (!canCreate) return;
      const trimmed = search.trim();
      const custom = onCreateOption?.(trimmed);
      const newOption: SelectOption = custom ?? { value: trimmed, label: trimmed };
      setCreatedOptions((prev) => [...prev, newOption]);
      // Auto-select the new option
      const prev = isMultiControlled ? multiControlled : multiInternal;
      const next = [...prev, newOption.value];
      if (!isMultiControlled) setMultiInternal(next);
      const nextAllOptions = [...allOptions, newOption];
      const nextOptions = nextAllOptions.filter((o) => next.includes(o.value));
      (props as MultipleProps).onChange?.(next, nextOptions);
      setSearch('');
      setHighlightIndex(-1);
    }, [canCreate, search, onCreateOption, isMultiControlled, multiControlled, multiInternal, allOptions, props]);

    const handleOptionClick = useCallback(
      (option: SelectOption) => {
        if (isMultiple) handleToggleMulti(option);
        else handleSelectSingle(option);
      },
      [isMultiple, handleToggleMulti, handleSelectSingle],
    );

    const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setHighlightIndex(0);
      if (!open) setOpen(true);
    }, [open]);

    /* ── Outside click ── */
    useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) closeDropdown();
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, [open, closeDropdown]);

    /* ── Keyboard ── */
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowDown': {
            e.preventDefault();
            if (!open) { openDropdown(); return; }
            setHighlightIndex((prev) => {
              let next = prev + 1;
              while (next < filteredOptions.length && filteredOptions[next]?.disabled) next++;
              return next < filteredOptions.length ? next : prev;
            });
            break;
          }
          case 'ArrowUp': {
            e.preventDefault();
            if (!open) { openDropdown(); return; }
            setHighlightIndex((prev) => {
              let next = prev - 1;
              while (next >= 0 && filteredOptions[next]?.disabled) next--;
              return next >= 0 ? next : prev;
            });
            break;
          }
          case 'Enter': {
            e.preventDefault();
            if (open && highlightIndex >= 0 && highlightIndex < filteredOptions.length) {
              handleOptionClick(filteredOptions[highlightIndex]);
              if (!isMultiple) closeDropdown();
            } else if (canCreate) {
              handleCreateOption();
            } else if (!open) {
              openDropdown();
            }
            break;
          }
          case ' ': {
            if (!searchable && !open) { e.preventDefault(); openDropdown(); }
            break;
          }
          case 'Escape': {
            if (open) { closeDropdown(); e.preventDefault(); }
            break;
          }
          case 'Tab': {
            if (open) closeDropdown();
            break;
          }
          case 'Backspace': {
            // Remove last tag in multi mode when search is empty
            if (isMultiple && searchable && !search && currentMulti.length > 0) {
              handleRemoveTag(currentMulti[currentMulti.length - 1]);
            }
            break;
          }
          case 'Home': {
            if (open) { e.preventDefault(); const i = filteredOptions.findIndex((o) => !o.disabled); if (i >= 0) setHighlightIndex(i); }
            break;
          }
          case 'End': {
            if (open) { e.preventDefault(); for (let i = filteredOptions.length - 1; i >= 0; i--) { if (!filteredOptions[i].disabled) { setHighlightIndex(i); break; } } }
            break;
          }
        }
      },
      [open, filteredOptions, highlightIndex, openDropdown, closeDropdown, handleOptionClick, searchable, isMultiple, search, currentMulti, handleRemoveTag, canCreate, handleCreateOption],
    );

    // Scroll highlighted into view
    useEffect(() => {
      if (!open || highlightIndex < 0) return;
      const item = dropdownRef.current?.querySelector(`[data-index="${highlightIndex}"]`);
      item?.scrollIntoView({ block: 'nearest' });
    }, [open, highlightIndex]);

    /* ── Display ── */
    const singleDisplayText = selectedOption ? (selectedOption.label ?? selectedOption.value) : placeholder;
    const hasValue = isMultiple ? currentMulti.length > 0 : !!selectedOption;
    const showClear = clearable && hasValue && !disabled && !readOnly;

    /* ── Trailing ── */
    const trailingEl = (
      <span className={styles['trailing-group']}>
        {showClear && (
          <button
            type="button"
            className={styles['clear-btn']}
            onClick={(e) => { e.stopPropagation(); handleClearAll(); }}
            tabIndex={-1}
            aria-label="Clear all"
          >
            <XCircleIcon size={size === 's' ? 16 : 20} />
          </button>
        )}
        <span className={[styles.chevron, open ? styles['chevron-open'] : ''].filter(Boolean).join(' ')}>
          <ChevronDownIcon size={size === 's' ? 16 : 20} />
        </span>
      </span>
    );

    return (
      <div
        ref={(node) => {
          wrapperRef.current = node!;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}
        {...rest}
      >
        <FieldShell
          label={label}
          size={size}
          leading={!isMultiple ? leading : undefined}
          trailing={trailingEl}
          helpText={helpText}
          error={error}
          disabled={disabled}
          readOnly={readOnly}
          focused={open}
          autoHeight={isMultiple}
          onFieldClick={handleToggle}
        >
          {/* ── Single mode ── */}
          {!isMultiple && (
            <div ref={fieldRef} className={styles.value} role="combobox" aria-expanded={open} tabIndex={disabled ? -1 : 0} onKeyDown={handleKeyDown}>
              <span
                className={[
                  styles['value-text'],
                  styles[`value-text-${size}`],
                  hasValue ? styles['value-filled'] : styles['value-placeholder'],
                  searchable && open ? styles['value-hidden'] : '',
                ].filter(Boolean).join(' ')}
              >
                {singleDisplayText}
              </span>
              {searchable && (
                <input
                  ref={inputRef}
                  className={[styles['search-input'], styles[`value-text-${size}`], open ? styles['search-visible'] : styles['search-hidden']].join(' ')}
                  value={search}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  placeholder={hasValue ? singleDisplayText : placeholder}
                  tabIndex={open ? 0 : -1}
                />
              )}
            </div>
          )}

          {/* ── Multiple mode ── */}
          {isMultiple && (() => {
            // Compute visible vs overflow tags
            const limit = typeof maxTagCount === 'number' ? maxTagCount : undefined;
            const shouldCollapse = !open && limit !== undefined && selectedOptions.length > limit;
            const visibleTags = shouldCollapse ? selectedOptions.slice(0, limit) : selectedOptions;
            const overflowTags = shouldCollapse ? selectedOptions.slice(limit) : [];
            const overflowCount = overflowTags.length;

            return (
              <div ref={fieldRef} className={[styles['multi-value'], styles[`multi-value-${size}`], currentMulti.length > 0 ? styles['multi-value-has-tags'] : ''].filter(Boolean).join(' ')} role="combobox" aria-expanded={open} tabIndex={disabled ? -1 : 0} onKeyDown={handleKeyDown}>
                {visibleTags.map((opt) => (
                  <Tag
                    key={opt.value}
                    label={opt.label ?? opt.value}
                    removable={!disabled && !readOnly}
                    onRemove={() => handleRemoveTag(opt.value)}
                    disabled={disabled}
                    className={size === 's' ? styles['compact-tag-s'] : undefined}
                  />
                ))}
                {overflowCount > 0 && (
                  <OverflowBadge
                    count={overflowCount}
                    items={overflowTags}
                    size={size}
                    compactClass={size === 's' ? styles['compact-tag-s'] : undefined}
                  />
                )}
                {searchable && (
                  <input
                    ref={inputRef}
                    className={[styles['multi-search-input'], styles[`value-text-${size}`]].join(' ')}
                    value={search}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    placeholder={currentMulti.length === 0 ? placeholder : ''}
                    onClick={(e) => { e.stopPropagation(); if (!open) openDropdown(); }}
                  />
                )}
                {!searchable && currentMulti.length === 0 && (
                  <span className={[styles['value-text'], styles[`value-text-${size}`], styles['value-placeholder']].join(' ')}>
                    {placeholder}
                  </span>
                )}
              </div>
            );
          })()}
        </FieldShell>

        {/* ── Dropdown ── */}
        {open && (
          <div ref={dropdownRef} className={styles.dropdown}>
            <Popover maxHeight={240}>
              {filteredOptions.length === 0 && !canCreate && (
                <div className={styles.empty}>No results</div>
              )}
              {filteredOptions.map((option, idx) => (
                <PopoverItem
                  key={option.value}
                  data-index={idx}
                  label={option.label ?? option.value}
                  caption={option.caption}
                  leading={option.leading}
                  selected={isMultiple ? currentMulti.includes(option.value) : option.value === currentSingle}
                  disabled={option.disabled}
                  onClick={() => handleOptionClick(option)}
                  className={idx === highlightIndex ? styles.highlighted : undefined}
                  onMouseEnter={() => setHighlightIndex(idx)}
                />
              ))}
              {canCreate && (
                <PopoverItem
                  label={`Create "${search.trim()}"`}
                  noCheck
                  onClick={handleCreateOption}
                  className={styles['create-option']}
                />
              )}
            </Popover>
          </div>
        )}
      </div>
    );
  },
);

SelectField.displayName = 'SelectField';

/* ── Overflow +N badge with portal tooltip ── */

function OverflowBadge({
  count,
  items,
  size,
  compactClass,
}: {
  count: number;
  items: SelectOption[];
  size: SelectFieldSize;
  compactClass?: string;
}) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const handleEnter = useCallback(() => {
    if (badgeRef.current) {
      const rect = badgeRef.current.getBoundingClientRect();
      setPos({
        top: rect.top + window.scrollY - 8,
        left: rect.left + rect.width / 2 + window.scrollX,
      });
    }
    setShow(true);
  }, []);

  const handleLeave = useCallback(() => setShow(false), []);

  return (
    <div
      ref={badgeRef}
      className={styles['overflow-badge']}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Tag label={`+${count}`} className={compactClass} />
      {show && createPortal(
        <div
          className={styles['overflow-tooltip']}
          style={{ top: pos.top, left: pos.left }}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {items.map((opt) => (
            <div key={opt.value} className={styles['overflow-tooltip-item']}>
              {opt.label ?? opt.value}
            </div>
          ))}
        </div>,
        document.body,
      )}
    </div>
  );
}

function XSmallIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
