import {
  forwardRef,
  useCallback,
  useState,
  type InputHTMLAttributes,
} from 'react';
import styles from './Toggle.module.css';

/* ── Types ── */

export type ToggleSize = 'small' | 'medium' | 'large';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label text */
  label?: string;
  /** Caption text below the label */
  caption?: string;
  /** Toggle size */
  size?: ToggleSize;
  /**
   * Side the toggle switch sits on.
   * 'right' (default) = text on left, toggle on right (Text-First)
   * 'left' = toggle on left, text on right (Toggle-First)
   */
  toggleSide?: 'left' | 'right';
  /** Show a bordered card wrapper */
  border?: boolean;
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      caption,
      size = 'medium',
      toggleSide = 'right',
      border = false,
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
    const checked = isControlled ? controlledChecked! : internalChecked;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalChecked(e.target.checked);
        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const barSizeClass = size === 'small' ? styles['bar-sm'] : size === 'large' ? styles['bar-lg'] : styles['bar-md'];
    const dotSizeClass = size === 'small' ? styles['dot-sm'] : size === 'large' ? styles['dot-lg'] : styles['dot-md'];

    const barClass = [
      styles.bar,
      barSizeClass,
      checked ? styles['bar-checked'] : '',
      disabled ? styles['bar-disabled'] : '',
    ]
      .filter(Boolean)
      .join(' ');

    const dotClass = [
      styles.dot,
      dotSizeClass,
      checked ? styles['dot-checked'] : '',
      disabled ? styles['dot-disabled'] : '',
    ]
      .filter(Boolean)
      .join(' ');

    const rootClass = [
      styles.root,
      size === 'small' ? styles['root-sm'] : '',
      disabled ? styles['root-disabled'] : '',
      border ? styles['root-border'] : '',
      border && disabled ? styles['root-border-disabled'] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const toggleSwitch = (
      <div className={styles['bar-wrapper']}>
        <div className={barClass}>
          <div className={dotClass} />
        </div>
      </div>
    );

    const textContent = (label || caption) && (
      <div className={styles.content}>
        {label && (
          <span
            className={[styles.label, disabled ? styles['label-disabled'] : '']
              .filter(Boolean)
              .join(' ')}
          >
            {label}
          </span>
        )}
        {caption && (
          <span
            className={[styles.caption, disabled ? styles['caption-disabled'] : '']
              .filter(Boolean)
              .join(' ')}
          >
            {caption}
          </span>
        )}
      </div>
    );

    return (
      <label className={rootClass}>
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
        {toggleSide === 'left' && toggleSwitch}
        {textContent}
        {toggleSide === 'right' && toggleSwitch}
      </label>
    );
  },
);

Toggle.displayName = 'Toggle';
