import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { FieldShell, type FieldHelpText } from '../FieldShell';
import styles from './NumberField.module.css';

export type NumberFieldSize = 's' | 'm' | 'l' | 'xl';
export type NumberFieldAlign = 'left' | 'center';

export interface NumberFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange'> {
  /** Label text above the field */
  label?: string;
  /** Size variant */
  size?: NumberFieldSize;
  /** Alignment: left = trailing steppers, center = split steppers */
  align?: NumberFieldAlign;
  /** Help text below the field */
  helpText?: FieldHelpText | string;
  /** Character count display */
  charCount?: string;
  /** Error state */
  error?: boolean | string;
  /** Step amount */
  step?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Leading element (only used in left-aligned mode) */
  leading?: ReactNode;
  /** Controlled value */
  value?: number | '';
  /** Default value for uncontrolled mode */
  defaultValue?: number | '';
  /** Change handler — receives numeric value */
  onChange?: (value: number | undefined) => void;
}

export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    {
      label,
      size = 'm',
      align = 'left',
      helpText,
      charCount,
      error,
      disabled,
      readOnly,
      step = 1,
      min,
      max,
      leading,
      value: controlledValue,
      defaultValue,
      onChange,
      className,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || innerRef;

    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState<number | ''>(
      defaultValue ?? '',
    );

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;
    const numericValue = currentValue === '' ? undefined : currentValue;

    const canDecrement =
      !disabled && !readOnly && (min === undefined || (numericValue ?? 0) > min);
    const canIncrement =
      !disabled && !readOnly && (max === undefined || (numericValue ?? 0) < max);

    const updateValue = useCallback(
      (next: number | undefined) => {
        if (!isControlled) setInternalValue(next ?? '');
        onChange?.(next);
      },
      [isControlled, onChange],
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        if (raw === '') {
          updateValue(undefined);
        } else {
          const n = parseFloat(raw);
          if (!isNaN(n)) updateValue(n);
        }
      },
      [updateValue],
    );

    const stepBy = useCallback(
      (delta: number) => {
        const base = numericValue ?? 0;
        let next = base + delta;
        if (min !== undefined) next = Math.max(min, next);
        if (max !== undefined) next = Math.min(max, next);
        updateValue(next);
        inputRef.current?.focus();
      },
      [numericValue, min, max, updateValue, inputRef],
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const iconSize = size === 's' ? 16 : size === 'xl' ? 24 : 20;

    const decrementBtn = (
      <button
        className={styles.stepper}
        onClick={() => stepBy(-step)}
        type="button"
        aria-label="Decrease"
        tabIndex={-1}
        disabled={!canDecrement}
      >
        <MinusIcon size={iconSize} />
      </button>
    );

    const incrementBtn = (
      <button
        className={styles.stepper}
        onClick={() => stepBy(step)}
        type="button"
        aria-label="Increase"
        tabIndex={-1}
        disabled={!canIncrement}
      >
        <PlusIcon size={iconSize} />
      </button>
    );

    const inputClassNames = [
      styles.input,
      styles[`input-${size}`],
      align === 'center' ? styles['input-center'] : '',
    ]
      .filter(Boolean)
      .join(' ');

    // Center align: [−] [input] [+]
    // Left align: [leading?] [input] [−] [+]
    const shellLeading = align === 'center' ? decrementBtn : leading;
    const shellTrailing =
      align === 'center' ? (
        incrementBtn
      ) : (
        <>
          {decrementBtn}
          {incrementBtn}
        </>
      );

    return (
      <FieldShell
        label={label}
        size={size}
        leading={shellLeading}
        trailing={shellTrailing}
        helpText={helpText}
        charCount={charCount}
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        focused={focused}
        className={className}
        onFieldClick={() => inputRef.current?.focus()}
      >
        <input
          ref={inputRef}
          className={inputClassNames}
          type="number"
          disabled={disabled}
          readOnly={readOnly}
          value={currentValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          step={step}
          min={min}
          max={max}
          {...rest}
        />
      </FieldShell>
    );
  },
);

NumberField.displayName = 'NumberField';

/* ── Inline SVG icons ── */

function MinusIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
