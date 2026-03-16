import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { FieldShell, type FieldHelpText } from '../FieldShell';
import styles from './InputField.module.css';

export type InputFieldSize = 's' | 'm' | 'l' | 'xl';
export type InputFieldHelpText = FieldHelpText;

export interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text above the field */
  label?: string;
  /** Size variant */
  size?: InputFieldSize;
  /** Leading element (icon, avatar, text, etc.) */
  leading?: ReactNode;
  /** Trailing element (icon, avatar, text, etc.) */
  trailing?: ReactNode;
  /** Show clear button when there is input */
  clearable?: boolean;
  /** Help text below the field */
  helpText?: InputFieldHelpText | string;
  /** Character count display (e.g. "0/100") */
  charCount?: string;
  /** Error state — shows negative border and help text */
  error?: boolean | string;
  /** Controlled value */
  value?: string;
  /** Default value for uncontrolled mode */
  defaultValue?: string;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      size = 'm',
      leading,
      trailing,
      clearable = false,
      helpText,
      charCount,
      error,
      disabled,
      readOnly,
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
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;
    const hasValue = currentValue.length > 0;

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

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalValue(e.target.value);
        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const handleClear = useCallback(() => {
      const input = inputRef.current;
      if (!input) return;
      const nativeSet = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value',
      )?.set;
      nativeSet?.call(input, '');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      if (!isControlled) setInternalValue('');
      input.focus();
    }, [inputRef, isControlled]);

    const clearButton =
      clearable && hasValue && !disabled && !readOnly ? (
        <button
          className={styles.clear}
          onClick={handleClear}
          type="button"
          aria-label="Clear"
          tabIndex={-1}
        >
          <XCircleIcon size={size === 's' ? 20 : 24} />
        </button>
      ) : null;

    return (
      <FieldShell
        label={label}
        size={size}
        leading={leading}
        trailing={
          <>
            {clearButton}
            {trailing}
          </>
        }
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
          className={[styles.input, styles[`input-${size}`]].join(' ')}
          disabled={disabled}
          readOnly={readOnly}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </FieldShell>
    );
  },
);

InputField.displayName = 'InputField';

/* ── Inline SVG icons ── */

function XCircleIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
