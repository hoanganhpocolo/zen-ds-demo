import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useEffect,
  type TextareaHTMLAttributes,
} from 'react';
import styles from './InputHeading.module.css';

export type InputHeadingSize = 'h1' | 'h2';

export interface InputHeadingProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
  /** Size — H1 uses h1 typography, H2 uses h3 typography */
  size?: InputHeadingSize;
  /** Controlled value */
  value?: string;
  /** Default value for uncontrolled mode */
  defaultValue?: string;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const InputHeading = forwardRef<HTMLTextAreaElement, InputHeadingProps>(
  (
    {
      size = 'h2',
      value: controlledValue,
      defaultValue,
      onChange,
      className,
      onFocus,
      onBlur,
      placeholder = 'Heading',
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

    // Auto-resize textarea height
    const autoResize = useCallback(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.style.height = '0';
      el.style.height = `${el.scrollHeight}px`;
    }, [textareaRef]);

    useEffect(() => {
      autoResize();
    }, [currentValue, autoResize]);

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(true);
        e.target.select();
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
        autoResize();
      },
      [isControlled, onChange, autoResize],
    );

    // Prevent Enter from creating newlines in single-line mode
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          textareaRef.current?.blur();
        }
        rest.onKeyDown?.(e);
      },
      [rest.onKeyDown, textareaRef],
    );

    const rootClassNames = [
      styles.root,
      styles[`size-${size}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const containerClassNames = [
      styles.container,
      focused ? styles.focused : '',
    ]
      .filter(Boolean)
      .join(' ');

    const inputClassNames = [
      styles.input,
      styles[`input-${size}`],
    ].join(' ');

    return (
      <div className={rootClassNames}>
        <div
          className={containerClassNames}
          onClick={() => textareaRef.current?.focus()}
        >
          <textarea
            ref={textareaRef}
            className={inputClassNames}
            value={currentValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={1}
            {...rest}
          />
        </div>
      </div>
    );
  },
);

InputHeading.displayName = 'InputHeading';
