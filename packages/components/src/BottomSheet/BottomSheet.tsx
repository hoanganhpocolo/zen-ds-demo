import {
  forwardRef,
  useEffect,
  useCallback,
  useState,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './BottomSheet.module.css';

export interface BottomSheetProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Whether the sheet is open */
  open: boolean;
  /** Called when the sheet should close */
  onClose: () => void;
  /** Title text in the header */
  title?: string;
  /** Description text below the title */
  description?: string;
  /** Show the header section */
  header?: boolean;
  /** Footer buttons — rendered inside a flex row */
  footer?: ReactNode;
  /** Content inside the body */
  children?: ReactNode;
}

export const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
  (
    {
      open,
      onClose,
      title,
      description,
      header = true,
      footer,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    // Manage mount/visibility separately for enter/exit animation
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (open) {
        setMounted(true);
        // Next frame → trigger enter animation
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setVisible(true));
        });
      } else {
        setVisible(false);
        const timer = setTimeout(() => setMounted(false), 300);
        return () => clearTimeout(timer);
      }
    }, [open]);

    // Close on Escape
    useEffect(() => {
      if (!open) return;
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handler);
      return () => document.removeEventListener('keydown', handler);
    }, [open, onClose]);

    // Lock body scroll
    useEffect(() => {
      if (!open) return;
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }, [open]);

    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
      },
      [onClose],
    );

    if (!mounted) return null;

    const overlayClassNames = [
      styles.overlay,
      visible ? styles['overlay-visible'] : '',
    ]
      .filter(Boolean)
      .join(' ');

    const sheetClassNames = [
      styles.sheet,
      footer ? styles['sheet-modal'] : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return createPortal(
      <div className={overlayClassNames} onClick={handleOverlayClick}>
        <div ref={ref} className={sheetClassNames} {...rest}>
          <div className={styles.inner}>
            {/* Top drag indicator */}
            <div className={styles['top-indicator']}>
              <div className={styles['top-indicator-bar']} />
            </div>

            {/* Header */}
            {header && title && (
              <div className={styles.header}>
                <div className={styles['header-row']}>
                  <div className={styles['header-content']}>
                    <h2 className={styles['header-title']}>{title}</h2>
                  </div>
                  <div className={styles['close-wrapper']}>
                    <button
                      className={styles.close}
                      onClick={onClose}
                      type="button"
                      aria-label="Close"
                    >
                      <XIcon />
                    </button>
                  </div>
                </div>
                {description && (
                  <p className={styles['header-description']}>{description}</p>
                )}
              </div>
            )}

            {/* Body */}
            <div
              className={[
                styles.body,
                !footer ? styles['body-action'] : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {children}
            </div>

            {/* Footer (modal type) */}
            {footer && (
              <div className={styles.footer}>
                <div className={styles['footer-buttons']}>{footer}</div>
              </div>
            )}

            {/* Bottom home indicator */}
            <div className={styles['bottom-indicator']}>
              <div className={styles['bottom-indicator-bar']} />
            </div>
          </div>
        </div>
      </div>,
      document.body,
    );
  },
);

BottomSheet.displayName = 'BottomSheet';

/* ── Inline SVG icon ── */

function XIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
