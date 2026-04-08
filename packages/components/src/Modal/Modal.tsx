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
import { XSmall } from '@zen/icons/line';
import { Button } from '../Button';
import styles from './Modal.module.css';

export type ModalLayout = 'basic' | 'fixed-left' | 'half-half' | '3-4' | 'big';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Controls visibility */
  open?: boolean;
  /** Panel layout variant */
  layout?: ModalLayout;
  /** Modal heading */
  title: string;
  /** Subheading / caption below title */
  caption?: ReactNode;
  /** Body slot content */
  children?: ReactNode;
  /** Left side-panel slot (multi-column layouts only) */
  sideSlot?: ReactNode;
  /** Primary action label */
  primaryLabel?: string;
  /** Secondary action label */
  secondaryLabel?: string;
  /** Primary button click */
  onPrimary?: () => void;
  /** Secondary / cancel button click (also calls onClose) */
  onSecondary?: () => void;
  /** Called on backdrop click or Escape key */
  onClose?: () => void;
  /** Portal target (defaults to document.body) */
  portalTarget?: HTMLElement;
  /** Render panel inline without portal or backdrop (for static previews) */
  inline?: boolean;
}

const isMultiCol = (layout: ModalLayout) =>
  layout === 'fixed-left' || layout === 'half-half' || layout === '3-4';

/** Dashed slot placeholder rendered when no content is provided */
function SlotPlaceholder() {
  return (
    <div className={styles.slot}>
      <span className={styles['slot-label']}>Replace Component Here</span>
    </div>
  );
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = false,
      layout = 'basic',
      title,
      caption,
      children,
      sideSlot,
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
    const panelRef = useRef<HTMLDivElement>(null);
    const multi = isMultiCol(layout);

    useEffect(() => {
      if (open) panelRef.current?.focus();
    }, [open]);

    useEffect(() => {
      if (open) {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
      }
    }, [open]);

    const handleBackdropClick = useCallback(() => { onClose?.(); }, [onClose]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose?.(); }
    }, [onClose]);

    const handleSecondary = useCallback(() => {
      onSecondary?.();
      onClose?.();
    }, [onSecondary, onClose]);

    if (!open && !inline) return null;

    /* ── Header (shared by both single and multi-column) ── */
    const header = (
      <div className={styles.header}>
        <div className={styles['header-content']}>
          <div className={styles['title-row']}>
            <h2 className={[styles.title, layout === 'big' ? styles['title-big'] : ''].filter(Boolean).join(' ')}>
              {title}
            </h2>
            <div className={styles['close-wrapper']}>
              <Button
                variant="flat-primary"
                size="s"
                icon={<XSmall size={24} />}
                onClick={onClose}
                aria-label="Close"
              />
            </div>
          </div>
          {caption && (
            <p className={styles.caption}>{caption}</p>
          )}
        </div>
      </div>
    );

    /* ── Body slot ── */
    const body = (
      <div className={styles.body}>
        <div className={styles['body-contents']}>
          {children ?? <SlotPlaceholder />}
        </div>
      </div>
    );

    /* ── Footer ── */
    const footer = (
      <div className={styles.footer}>
        <Button variant="tertiary" size="m" onClick={handleSecondary}>
          {secondaryLabel}
        </Button>
        <Button variant="primary" size="m" onClick={onPrimary}>
          {primaryLabel}
        </Button>
      </div>
    );

    const content = (
      <div
        className={styles.backdrop}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        role="presentation"
      >
        <div
          ref={(node) => {
            panelRef.current = node!;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          className={[styles.panel, styles[`layout-${layout}`], className ?? ''].filter(Boolean).join(' ')}
          onClick={(e) => e.stopPropagation()}
          {...rest}
        >
          {multi ? (
            <>
              {/* ── Left side slot ── */}
              <div className={[styles.side, styles[`side-${layout}`]].join(' ')}>
                <div className={styles['side-contents']}>
                  {sideSlot ?? <SlotPlaceholder />}
                </div>
              </div>

              {/* ── Right content column ── */}
              <div className={[styles.content, styles[`content-${layout}`]].join(' ')}>
                {header}
                {body}
                {footer}
              </div>
            </>
          ) : (
            <>
              {header}
              {body}
              {footer}
            </>
          )}
        </div>
      </div>
    );

    if (inline) {
      return (
        <div
          ref={(node) => {
            panelRef.current = node!;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          role="dialog"
          aria-labelledby="modal-title"
          tabIndex={-1}
          className={[styles.panel, styles[`layout-${layout}`], className ?? ''].filter(Boolean).join(' ')}
          {...rest}
        >
          {multi ? (
            <>
              <div className={[styles.side, styles[`side-${layout}`]].join(' ')}>
                <div className={styles['side-contents']}>
                  {sideSlot ?? <SlotPlaceholder />}
                </div>
              </div>
              <div className={[styles.content, styles[`content-${layout}`]].join(' ')}>
                {header}
                {body}
                {footer}
              </div>
            </>
          ) : (
            <>
              {header}
              {body}
              {footer}
            </>
          )}
        </div>
      );
    }

    return createPortal(content, portalTarget ?? document.body);
  },
);

Modal.displayName = 'Modal';
