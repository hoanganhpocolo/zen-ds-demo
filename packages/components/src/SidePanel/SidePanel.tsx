import { type HTMLAttributes, type ReactNode } from 'react';
import { XSmall } from '@zen/icons/line';
import styles from './SidePanel.module.css';

export type SidePanelVariant = 'standard' | 'modal';

export interface SidePanelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Panel variant */
  variant?: SidePanelVariant;
  /** Heading text */
  title?: ReactNode;
  /** Description text below the heading */
  description?: ReactNode;
  /** Footer slot — typically action buttons */
  footer?: ReactNode;
  /** Called when the close button is clicked */
  onClose?: () => void;
  /** Body content */
  children?: ReactNode;
}

export function SidePanel({
  variant = 'standard',
  title,
  description,
  footer,
  onClose,
  children,
  className,
  ...rest
}: SidePanelProps) {
  const isModal = variant === 'modal';

  const rootClasses = [
    styles.root,
    isModal ? styles['root-modal'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const containerClasses = [
    styles.container,
    isModal ? styles['container-modal'] : styles['container-standard'],
  ].join(' ');

  const headerClasses = [
    styles.header,
    isModal ? styles['header-modal'] : styles['header-standard'],
  ].join(' ');

  const actionsClasses = [
    styles.actions,
    isModal ? styles['actions-modal'] : styles['actions-standard'],
  ].join(' ');

  return (
    <div className={rootClasses} {...rest}>
      <div className={containerClasses}>

        {/* ── Header ── */}
        <div className={headerClasses}>
          <div className={styles['header-row']}>
            <div className={styles['heading-area']}>
              {title != null && (
                <h3 className={styles.title}>{title}</h3>
              )}
            </div>
            {onClose && (
              <button
                type="button"
                className={styles['close-btn']}
                onClick={onClose}
                aria-label="Close"
              >
                <XSmall size={24} />
              </button>
            )}
          </div>
          {description != null && (
            <p className={styles.description}>{description}</p>
          )}
        </div>

        {/* ── Body ── */}
        {children != null && (
          <div className={styles.body}>
            {children}
          </div>
        )}

        {/* ── Footer ── */}
        {footer != null && (
          <div className={actionsClasses}>
            <div className={styles['actions-inner']}>
              {footer}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

SidePanel.displayName = 'SidePanel';
