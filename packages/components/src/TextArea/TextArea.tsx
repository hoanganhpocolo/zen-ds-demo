import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  type TextareaHTMLAttributes,
} from 'react';
import { FieldShell, type FieldHelpText } from '../FieldShell';
import styles from './TextArea.module.css';

export type TextAreaSize = 's' | 'm' | 'l';

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
  /** Label text above the field */
  label?: string;
  /** Size variant */
  size?: TextAreaSize;
  /** Help text below the field */
  helpText?: FieldHelpText | string;
  /** Character count display (e.g. "0/500") */
  charCount?: string;
  /** Error state */
  error?: boolean | string;
  /** Disable resize handle */
  noResize?: boolean;
  /** Controlled value */
  value?: string;
  /** Default value for uncontrolled mode */
  defaultValue?: string;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      size = 'm',
      helpText,
      charCount,
      error,
      disabled,
      readOnly,
      noResize,
      value: controlledValue,
      defaultValue,
      onChange,
      className,
      onFocus,
      onBlur,
      rows = 3,
      ...rest
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef =
      (ref as React.RefObject<HTMLTextAreaElement>) || innerRef;

    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isControlled) setInternalValue(e.target.value);
        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const textareaClassNames = [
      styles.textarea,
      styles[`textarea-${size}`],
      noResize ? styles['no-resize'] : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <FieldShell
        label={label}
        size={size}
        helpText={helpText}
        charCount={charCount}
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        focused={focused}
        autoHeight
        className={className}
        onFieldClick={() => textareaRef.current?.focus()}
      >
        <textarea
          ref={textareaRef}
          className={textareaClassNames}
          disabled={disabled}
          readOnly={readOnly}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
          {...rest}
        />
      </FieldShell>
    );
  },
);

TextArea.displayName = 'TextArea';
