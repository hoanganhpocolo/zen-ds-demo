import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { InfoCircle } from '@zen/icons/solid';
import { AlertTriangle } from '@zen/icons/solid';
import { AlertOctagon } from '@zen/icons/solid';
import { CheckCircle } from '@zen/icons/solid';
import { XSmall } from '@zen/icons/line';
import { Button } from '../Button';
import styles from './InlineMessage.module.css';

export type InlineMessageTheme = 'neutral' | 'info' | 'positive' | 'warning' | 'negative';

export interface InlineMessageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Color theme */
  theme?: InlineMessageTheme;
  /** Bold title text */
  title?: string;
  /** Body caption text */
  caption?: ReactNode;
  /** Action button label */
  actionLabel?: string;
  /** Action button click handler */
  onAction?: () => void;
  /** Show close button */
  closable?: boolean;
  /** Close button click handler */
  onClose?: () => void;
}

const THEME_ICONS: Record<InlineMessageTheme, ReactNode> = {
  neutral: <InfoCircle size={24} />,
  info: <InfoCircle size={24} />,
  positive: <CheckCircle size={24} />,
  warning: <AlertTriangle size={24} />,
  negative: <AlertOctagon size={24} />,
};

export const InlineMessage = forwardRef<HTMLDivElement, InlineMessageProps>(
  (
    {
      theme = 'neutral',
      title,
      caption,
      actionLabel,
      onAction,
      closable = false,
      onClose,
      className,
      ...rest
    },
    ref,
  ) => {
    const classNames = [styles.root, styles[theme], className ?? '']
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...rest}>
        {/* Icon */}
        <span className={styles.icon}>{THEME_ICONS[theme]}</span>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.text}>
            {title && <p className={styles.title}>{title}</p>}
            {caption && <p className={styles.caption}>{caption}</p>}
          </div>
          {actionLabel && (
            <Button
              variant="tertiary"
              size="xs"
              onClick={onAction}
              className={styles.action}
            >
              {actionLabel}
            </Button>
          )}
        </div>

        {/* Close */}
        {closable && (
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            <XSmall size={24} />
          </button>
        )}
      </div>
    );
  },
);

InlineMessage.displayName = 'InlineMessage';
