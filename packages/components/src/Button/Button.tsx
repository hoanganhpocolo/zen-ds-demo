import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant =
  | 'primary' | 'accent' | 'secondary' | 'tertiary'
  | 'danger' | 'danger-subtle' | 'positive' | 'positive-subtle'
  | 'flat-primary' | 'flat-accent'
  | 'inverse' | 'white' | 'white-overlay' | 'black-overlay';
export type ButtonSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
}

const labelPaddingMap: Record<ButtonSize, string> = {
  '2xs': styles['label-wrapper-padding-xs'],
  xs: styles['label-wrapper-padding-xs'],
  s: styles['label-wrapper-padding-s'],
  m: styles['label-wrapper-padding-m'],
  l: styles['label-wrapper-padding-l'],
  xl: styles['label-wrapper-padding-xl'],
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'm',
      icon,
      iconRight,
      loading = false,
      disabled,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const isIconOnly = !children && (icon || iconRight);

    const classNames = [
      styles.button,
      styles[variant],
      styles[`size-${size}`],
      isIconOnly ? styles['icon-only'] : '',
      loading ? styles.loading : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        {icon && !loading && <span className={styles.icon}>{icon}</span>}
        {children && <span className={`${styles.label} ${labelPaddingMap[size]}`}>{children}</span>}
        {iconRight && <span className={styles.icon}>{iconRight}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
