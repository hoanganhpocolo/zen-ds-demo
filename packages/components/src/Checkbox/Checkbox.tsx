import {
  forwardRef,
  useCallback,
  useState,
  type InputHTMLAttributes,
} from 'react';
import styles from './Checkbox.module.css';

export type CheckboxSide = 'left' | 'right';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label text */
  label?: string;
  /** Caption text below the label */
  caption?: string;
  /** Checkbox position relative to label */
  checkSide?: CheckboxSide;
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      caption,
      checkSide = 'left',
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled,
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalChecked(e.target.checked);
        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const checkClassName = disabled
      ? checked
        ? styles['check-disabled-selected']
        : styles['check-disabled-unselected']
      : checked
        ? styles['check-selected']
        : styles['check-unselected'];

    const checkBox = (
      <div className={styles['check-wrapper']}>
        <div className={[styles.check, checkClassName].join(' ')}>
          {checked && (
            <span className={styles['check-icon']}>
              <CheckIcon />
            </span>
          )}
        </div>
      </div>
    );

    const labelEl = label && (
      <span
        className={[
          styles.label,
          disabled ? styles['label-disabled'] : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {label}
      </span>
    );

    const rootClassNames = [styles.root, className ?? '']
      .filter(Boolean)
      .join(' ');

    const containerClassNames = [
      styles.container,
      disabled ? styles['container-disabled'] : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={rootClassNames}>
        <input
          ref={ref}
          type="checkbox"
          className={styles.native}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          id={id}
          {...rest}
        />
        <div className={containerClassNames}>
          {checkSide === 'left' && checkBox}
          {labelEl}
          {checkSide === 'right' && checkBox}
        </div>
        {caption && (
          <span
            className={[
              styles.caption,
              disabled ? styles['caption-disabled'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {caption}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';

/* ── Inline SVG icon ── */

function CheckIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
