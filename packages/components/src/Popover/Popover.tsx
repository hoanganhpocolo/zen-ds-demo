import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  type ChangeEvent,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { SearchMedium } from '@zen/icons/line';
import styles from './Popover.module.css';

export type PopoverPlacement =
  | 'bottom-start' | 'bottom-end' | 'bottom-center'
  | 'top-start'    | 'top-end'    | 'top-center';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /** Show search input at the top */
  search?: boolean;
  /** Controlled search value */
  searchValue?: string;
  /** Callback when search input changes */
  onSearchChange?: (value: string) => void;
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Label text shown between search and items */
  label?: string;
  /** Max height of the item list before it scrolls */
  maxHeight?: number;
  children?: ReactNode;

  /** === Controlled / positioned mode === */
  /** Controls visibility (required when using anchorEl). If omitted, renders inline. */
  open?: boolean;
  /** Anchor element — when provided, Popover renders via portal at this position */
  anchorEl?: HTMLElement | null;
  /** Placement relative to anchor. Default: bottom-start */
  placement?: PopoverPlacement;
  /** Gap between anchor and popover (px). Default: 4 */
  offset?: number;
  /** Called when user clicks outside or presses Escape */
  onClose?: () => void;
}

const DEFAULT_OFFSET = 4;

function computePosition(
  anchor: DOMRect,
  popover: { width: number; height: number },
  placement: PopoverPlacement,
  offset: number,
): { top: number; left: number; placement: PopoverPlacement } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Try preferred placement, flip vertically if no room
  let side: 'top' | 'bottom' = placement.startsWith('top') ? 'top' : 'bottom';
  const align: 'start' | 'end' | 'center' = placement.endsWith('start')
    ? 'start'
    : placement.endsWith('end')
      ? 'end'
      : 'center';

  const spaceBelow = vh - anchor.bottom;
  const spaceAbove = anchor.top;
  if (side === 'bottom' && spaceBelow < popover.height + offset && spaceAbove > spaceBelow) side = 'top';
  if (side === 'top' && spaceAbove < popover.height + offset && spaceBelow > spaceAbove) side = 'bottom';

  const top = side === 'bottom'
    ? anchor.bottom + offset
    : anchor.top - popover.height - offset;

  let left: number;
  if (align === 'start') left = anchor.left;
  else if (align === 'end') left = anchor.right - popover.width;
  else left = anchor.left + anchor.width / 2 - popover.width / 2;

  // Clamp horizontally within viewport
  left = Math.max(8, Math.min(left, vw - popover.width - 8));

  return { top, left, placement: `${side}-${align}` as PopoverPlacement };
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      search = false,
      searchValue,
      onSearchChange,
      searchPlaceholder = 'Search',
      label,
      maxHeight,
      className,
      children,
      open,
      anchorEl,
      placement = 'bottom-start',
      offset = DEFAULT_OFFSET,
      onClose,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

    const isPositioned = anchorEl !== undefined;

    // Mount/closing state for enter/exit animations
    const [mounted, setMounted] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
      if (!isPositioned) return;
      if (open) {
        setMounted(true);
        setClosing(false);
      } else if (mounted) {
        setClosing(true);
        const t = setTimeout(() => {
          setMounted(false);
          setClosing(false);
        }, 100);
        return () => clearTimeout(t);
      }
    }, [open, isPositioned, mounted]);

    // Compute position when open (depends on `mounted` so we re-run after panelRef attaches)
    useLayoutEffect(() => {
      if (!isPositioned || !open || !mounted || !anchorEl || !panelRef.current) return;
      const update = () => {
        const anchorRect = anchorEl.getBoundingClientRect();
        const { offsetWidth: w, offsetHeight: h } = panelRef.current!;
        const { top, left } = computePosition(anchorRect, { width: w, height: h }, placement, offset);
        setPos({ top, left });
      };
      update();
      window.addEventListener('resize', update);
      window.addEventListener('scroll', update, true);
      return () => {
        window.removeEventListener('resize', update);
        window.removeEventListener('scroll', update, true);
      };
    }, [isPositioned, open, mounted, anchorEl, placement, offset]);

    // Click outside + Escape
    const handleClose = useCallback(() => { onClose?.(); }, [onClose]);

    useEffect(() => {
      if (!isPositioned || !open) return;
      const onClickOutside = (e: MouseEvent) => {
        const target = e.target as Node;
        if (panelRef.current?.contains(target)) return;
        if (anchorEl?.contains(target)) return;
        handleClose();
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
      };
      document.addEventListener('pointerdown', onClickOutside);
      document.addEventListener('keydown', onKey);
      return () => {
        document.removeEventListener('pointerdown', onClickOutside);
        document.removeEventListener('keydown', onKey);
      };
    }, [isPositioned, open, anchorEl, handleClose]);

    const content = (
      <div
        ref={(node) => {
          panelRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={[styles.root, isPositioned && closing ? styles.closing : '', className ?? ''].filter(Boolean).join(' ')}
        role="listbox"
        style={
          isPositioned
            ? pos
              ? { position: 'fixed', top: pos.top, left: pos.left, zIndex: 1001 }
              : { position: 'fixed', top: 0, left: 0, zIndex: 1001, visibility: 'hidden' }
            : undefined
        }
        {...rest}
      >
        {/* ── Search ── */}
        {search && (
          <div className={styles.search}>
            <div className={styles['search-inner']}>
              <SearchMedium size={20} className={styles['search-icon']} />
              <input
                ref={inputRef}
                type="text"
                className={styles['search-input']}
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onSearchChange?.(e.target.value)
                }
                aria-label={searchPlaceholder}
              />
            </div>
          </div>
        )}

        {/* ── Label ── */}
        {label && (
          <div className={styles['label-row']}>
            <span className={styles.label}>{label}</span>
          </div>
        )}

        {/* ── Item list ── */}
        <div
          className={styles['item-list']}
          style={maxHeight ? { maxHeight, overflowY: 'auto' } : undefined}
        >
          {children}
        </div>
      </div>
    );

    // Positioned mode — portal to body with enter/exit animation
    if (isPositioned) {
      if (!mounted) return null;
      return createPortal(content, document.body);
    }

    // Inline mode — backward compatible
    return content;
  },
);

Popover.displayName = 'Popover';