import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { InfoCircle, CheckCircle, AlertTriangle, InfoHexagon } from '@zen/icons/solid';
import { Button } from '../Button';
import styles from './Dialog.module.css';

export type DialogTheme = 'default' | 'info' | 'positive' | 'warning' | 'negative';

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Controls visibility */
  open?: boolean;
  /** Color/icon theme */
  theme?: DialogTheme;
  /** Dialog heading */
  title: string;
  /** Body description */
  description?: ReactNode;
  /** Primary action label */
  primaryLabel?: string;
  /** Secondary action label */
  secondaryLabel?: string;
  /** Primary button click */
  onPrimary?: () => void;
  /** Secondary button / cancel click */
  onSecondary?: () => void;
  /** Called when backdrop is clicked or Escape pressed */
  onClose?: () => void;
  /** Portal target (defaults to document.body) */
  portalTarget?: HTMLElement;
  /** Render panel inline without portal or backdrop (for static previews) */
  inline?: boolean;
}

const THEME_ICONS: Record<DialogTheme, ReactNode> = {
  default:  <InfoCircle size={48} />,
  info:     <InfoCircle size={48} />,
  positive: <CheckCircle size={48} />,
  warning:  <AlertTriangle size={48} />,
  negative: <InfoHexagon size={48} />,
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open = false,
      theme = 'default',
      title,
      description,
      primaryLabel = 'Confirm',
      secondaryLabel = 'Cancel',
      onPrimary,
      onSecondary,
      onClose,
      portalTarget,
      inline = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    // Focus the dialog panel when opened
    useEffect(() => {
      if (open) {
        dialogRef.current?.focus();
      }
    }, [open]);

    // Lock body scroll when open
    useEffect(() => {
      if (open) {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
      }
    }, [open]);

    const handleBackdropClick = useCallback(() => {
      onClose?.();
    }, [onClose]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose?.();
      }
    }, [onClose]);

    const handleSecondary = useCallback(() => {
      onSecondary?.();
      onClose?.();
    }, [onSecondary, onClose]);

    if (!open && !inline) return null;

    const panel = (
      <div
        ref={(node) => {
          dialogRef.current = node!;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby={description ? 'dialog-desc' : undefined}
        tabIndex={-1}
        className={[styles.panel, styles[theme], className ?? ''].filter(Boolean).join(' ')}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {/* Content */}
        <div className={styles.content}>
          {/* Icon */}
          <div className={[styles['icon-wrapper'], styles[`icon-${theme}`]].join(' ')}>
            {THEME_ICONS[theme]}
          </div>

          {/* Heading + description */}
          <div className={styles.text}>
            <h2 id="dialog-title" className={styles.title}>{title}</h2>
            {description && (
              <p id="dialog-desc" className={styles.description}>{description}</p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Button variant="tertiary" size="m" onClick={handleSecondary}>
            {secondaryLabel}
          </Button>
          <Button variant="primary" size="m" onClick={onPrimary}>
            {primaryLabel}
          </Button>
        </div>
      </div>
    );

    if (inline) return panel;

    return createPortal(
      <div
        className={styles.backdrop}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        role="presentation"
      >
        {panel}
      </div>,
      portalTarget ?? document.body,
    );
  },
);

Dialog.displayName = 'Dialog';
