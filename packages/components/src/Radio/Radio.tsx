import {
  forwardRef,
  useCallback,
  useContext,
  useState,
  type InputHTMLAttributes,
} from 'react';
import styles from './Radio.module.css';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Option value — required when used inside RadioGroup */
  value?: string;
  /** Label text */
  label?: string;
  /** Caption text below the label */
  caption?: string;
  /** Radio mark position relative to label */
  radioSide?: 'left' | 'right';
  /** Bordered card variant */
  border?: boolean;
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked (uncontrolled) */
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      value,
      label,
      caption,
      radioSide = 'left',
      border = false,
      checked: checkedProp,
      defaultChecked = false,
      onChange,
      disabled,
      name: nameProp,
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const ctx = useContext(RadioGroupContext);

    /* Resolve name from group or own prop */
    const name = ctx?.name ?? nameProp;

    /* Resolve checked state: group context > controlled > uncontrolled */
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isGroupControlled = ctx !== null && value !== undefined;
    const isControlled = checkedProp !== undefined;
    const checked = isGroupControlled
      ? ctx.value === value
      : isControlled
        ? checkedProp
        : internalChecked;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isGroupControlled && value !== undefined) {
          ctx.onChange?.(value);
        } else if (!isControlled) {
          setInternalChecked(e.target.checked);
        }
        onChange?.(e);
      },
      [isGroupControlled, isControlled, ctx, value, onChange],
    );

    /* ── Radio mark visual ── */
    const markClass = [
      styles.mark,
      disabled
        ? checked
          ? styles['mark-disabled-selected']
          : styles['mark-disabled-unselected']
        : checked
          ? styles['mark-selected']
          : styles['mark-unselected'],
    ].join(' ');

    const radioMark = (
      <div className={styles['mark-wrapper']}>
        <div className={markClass}>
          {checked && <span className={styles['mark-dot']} />}
        </div>
      </div>
    );

    /* ── Content ── */
    const contentEl = (label || caption) && (
      <div className={styles.content}>
        {label && (
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
        )}
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
      </div>
    );

    /* ── Root classes ── */
    const rootClass = [
      styles.root,
      border ? styles['root-border'] : '',
      border && checked ? styles['root-border-selected'] : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const rowClass = [
      styles.row,
      border ? styles['row-border'] : '',
    ].join(' ');

    return (
      <label className={rootClass}>
        <input
          ref={ref}
          type="radio"
          className={styles.native}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          id={id}
          {...rest}
        />
        <div className={rowClass}>
          {radioSide === 'left' && radioMark}
          {contentEl}
          {radioSide === 'right' && radioMark}
        </div>
      </label>
    );
  },
);

Radio.displayName = 'Radio';
