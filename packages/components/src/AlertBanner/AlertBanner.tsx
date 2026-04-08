import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import styles from './AlertBanner.module.css';

export type AlertBannerTheme = 'default' | 'info' | 'positive' | 'warning' | 'negative';
export type AlertBannerSize = 'm' | 's';

export interface AlertBannerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Alert message content */
  children: ReactNode;
  /** Color theme */
  theme?: AlertBannerTheme;
  /** Size variant */
  size?: AlertBannerSize;
  /** Leading icon element. If not provided, a default icon is rendered based on theme. Pass `null` to hide. */
  icon?: ReactNode | null;
  /** Action button element (only visible at size "m") */
  action?: ReactNode;
  /** Called when the close button is clicked */
  onClose?: () => void;
}

export const AlertBanner = forwardRef<HTMLDivElement, AlertBannerProps>(
  (
    {
      children,
      theme = 'default',
      size = 'm',
      icon,
      action,
      onClose,
      className,
      ...rest
    },
    ref,
  ) => {
    const classNames = [
      styles['alert-banner'],
      styles[theme],
      styles[`size-${size}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const iconSize = size === 'm' ? 24 : 20;

    return (
      <div ref={ref} className={classNames} role="alert" {...rest}>
        {icon !== null && (
          <span className={styles.icon}>
            {icon || <DefaultIcon theme={theme} size={iconSize} />}
          </span>
        )}
        <span className={styles.message}>{children}</span>
        {action && size === 'm' && action}
        {onClose && (
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            <XSmallIcon size={iconSize} />
          </button>
        )}
      </div>
    );
  },
);

AlertBanner.displayName = 'AlertBanner';

/* ── Inline SVG icons (to avoid @zen/icons dependency in the component package) ── */

function DefaultIcon({ theme, size }: { theme: AlertBannerTheme; size: number }) {
  switch (theme) {
    case 'info':
      return <InfoCircleSolidIcon size={size} />;
    case 'positive':
      return <CheckSolidIcon size={size} />;
    case 'warning':
      return <AlertTriangleSolidIcon size={size} />;
    case 'negative':
      return <XCircleSolidIcon size={size} />;
    default:
      return <InfoCircleLineIcon size={size} />;
  }
}

function InfoCircleLineIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoCircleSolidIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H12.01C12.5623 9 13.01 8.55228 13.01 8C13.01 7.44772 12.5623 7 12.01 7H12ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z" fill="currentColor" />
    </svg>
  );
}

function CheckSolidIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289L10.5 13.0858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L9.79289 15.2071C10.1834 15.5976 10.8166 15.5976 11.2071 15.2071L16.7071 9.70711Z" fill="currentColor" />
    </svg>
  );
}

function AlertTriangleSolidIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2301 3.19936C11.0231 1.78498 12.9769 1.78498 13.7699 3.19936L21.7128 17.3757C22.4833 18.75 21.5293 20.4 19.9428 20.4H4.05717C2.47069 20.4 1.51673 18.75 2.28717 17.3757L10.2301 3.19936ZM12 8C12.5523 8 13 8.44772 13 9V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V9C11 8.44772 11.4477 8 12 8ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18H12.01C12.5623 18 13.01 17.5523 13.01 17C13.01 16.4477 12.5623 16 12.01 16H12Z" fill="currentColor" />
    </svg>
  );
}

function XCircleSolidIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="currentColor" />
    </svg>
  );
}

function XSmallIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8L8 16M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
