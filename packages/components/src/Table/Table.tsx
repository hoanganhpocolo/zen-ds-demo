import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Table.module.css';

/* ── Types ── */

export type SortDirection = 'none' | 'ascending' | 'descending';
export type TableAlign = 'left' | 'right';
export type CellState = 'default' | 'hover' | 'focused' | 'selected';
export type StickyEdge = 'left' | 'right';

/* ── Table structural components ── */

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export function Table({ children, className, ...rest }: TableProps) {
  return (
    <table className={[styles.table, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </table>
  );
}

/* ── TableContainer — scrollable wrapper for sticky columns ── */

export interface TableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TableContainer({ children, className, ...rest }: TableContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [update]);

  const containerClass = [
    styles['table-container'],
    canScrollLeft ? styles['scroll-shadow-left'] : '',
    canScrollRight ? styles['scroll-shadow-right'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={containerClass} {...rest}>
      {children}
    </div>
  );
}

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export function TableHead({ children, ...rest }: TableHeadProps) {
  return <thead {...rest}>{children}</thead>;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export function TableBody({ children, ...rest }: TableBodyProps) {
  return <tbody {...rest}>{children}</tbody>;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export function TableRow({ children, className, ...rest }: TableRowProps) {
  return (
    <tr className={[styles.tr, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </tr>
  );
}

/* ── TableHeaderCell ── */

export interface TableHeaderCellProps {
  children?: React.ReactNode;
  label?: string;
  align?: TableAlign;
  sort?: SortDirection;
  onSort?: () => void;
  icon?: React.ReactNode;
  /** Checkbox-type header — renders a slot for a control */
  control?: React.ReactNode;
  /** Pin column to left or right edge */
  sticky?: StickyEdge;
  /** Pixel offset from the edge — use when multiple columns are sticky on the same side */
  stickyOffset?: number;
  className?: string;
}

export function TableHeaderCell({
  children,
  label,
  align = 'left',
  sort = 'none',
  onSort,
  icon,
  control,
  sticky,
  stickyOffset = 0,
  className,
}: TableHeaderCellProps) {
  const isStatic = !onSort && sort === 'none';
  const isSorted = sort === 'ascending' || sort === 'descending';

  const thClass = [
    styles.th,
    align === 'right' ? styles['th-right'] : styles['th-left'],
    isStatic ? styles['th-static'] : '',
    isSorted ? styles['th-sorted'] : '',
    sticky === 'left' ? styles['th-sticky-left'] : '',
    sticky === 'right' ? styles['th-sticky-right'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const innerClass = [
    styles['th-inner'],
    align === 'right' ? styles['th-inner-right'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  const stickyStyle: React.CSSProperties = sticky ? { [sticky]: stickyOffset } : {};

  if (control) {
    return (
      <th className={thClass} style={stickyStyle}>
        <div className={innerClass}>{control}</div>
      </th>
    );
  }

  return (
    <th className={thClass} style={stickyStyle} onClick={onSort} aria-sort={sort !== 'none' ? sort : undefined}>
      <div className={innerClass}>
        {icon && <span className={styles['th-leading-icon']}>{icon}</span>}
        <span className={styles['th-label']}>{label ?? children}</span>
        {onSort && (
          <span className={styles['th-sort-icon']}>
            <SortIcon direction={sort} />
          </span>
        )}
      </div>
    </th>
  );
}

function ExpandIcon({ expanded }: { expanded: boolean }) {
  return (
    <span
      className={[
        styles['expand-icon'],
        expanded ? styles['expand-icon-expanded'] : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={styles['expand-icon-bar-h']} />
      <span className={styles['expand-icon-bar-v']} />
    </span>
  );
}

function SortIcon({ direction }: { direction: SortDirection }) {
  // Paths with a 2px gap: up base at y=7, down base at y=9
  const upPath   = 'M8 2.5L4.5 7H11.5L8 2.5Z';
  const downPath = 'M8 13.5L11.5 9H4.5L8 13.5Z';

  const upActive   = direction === 'ascending';
  const downActive = direction === 'descending';
  const neither    = direction === 'none';

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d={upPath}
        className={upActive ? styles['sort-active'] : styles['sort-inactive']}
        fillOpacity={neither ? 0.4 : upActive ? 1 : 0.3}
      />
      <path
        d={downPath}
        className={downActive ? styles['sort-active'] : styles['sort-inactive']}
        fillOpacity={neither ? 0.4 : downActive ? 1 : 0.3}
      />
    </svg>
  );
}

/* ── TableCell ── */

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  align?: TableAlign;
  state?: CellState;
  /** Highlight this cell as part of the active sort column */
  sorted?: boolean;
  /** Show a row-open button on hover */
  openAction?: React.ReactNode;
  /** Pin column to left or right edge */
  sticky?: StickyEdge;
  /** Pixel offset from the edge — use when multiple columns are sticky on the same side */
  stickyOffset?: number;
  className?: string;
}

export function TableCell({
  children,
  align = 'left',
  state = 'default',
  sorted = false,
  openAction,
  sticky,
  stickyOffset = 0,
  className,
  style,
  ...rest
}: TableCellProps) {
  const tdClass = [
    styles.td,
    align === 'right' ? styles['td-right'] : styles['td-left'],
    sorted ? styles['td-sorted'] : '',
    state === 'hover' ? styles['td-hover'] : '',
    state === 'selected' ? styles['td-selected'] : '',
    state === 'focused' ? styles['td-focused'] : '',
    sticky === 'left' ? styles['td-sticky-left'] : '',
    sticky === 'right' ? styles['td-sticky-right'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const innerClass = [
    styles['td-inner'],
    align === 'right' ? styles['td-inner-right'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  const stickyStyle: React.CSSProperties = sticky ? { [sticky]: stickyOffset } : {};

  return (
    <td className={tdClass} tabIndex={state === 'focused' ? 0 : undefined} style={{ ...stickyStyle, ...style }} {...rest}>
      <div className={innerClass}>{children}</div>
      {openAction && state === 'hover' && openAction}
    </td>
  );
}

/* ── Cell content primitives ── */

/* TextCell — primary label + optional caption */
export interface TextCellProps {
  primary: React.ReactNode;
  caption?: React.ReactNode;
  bold?: boolean;
}

export function TextCell({ primary, caption, bold }: TextCellProps) {
  return (
    <div className={styles['cell-text']}>
      <span
        className={[
          styles['cell-text-primary'],
          bold ? styles['cell-text-primary-bold'] : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {primary}
      </span>
      {caption && <span className={styles['cell-text-caption']}>{caption}</span>}
    </div>
  );
}

/* LeadingCell — avatar / photo / icon + text */
export interface LeadingCellProps {
  media: React.ReactNode;
  primary: React.ReactNode;
  caption?: React.ReactNode;
  bold?: boolean;
}

export function LeadingCell({ media, primary, caption, bold }: LeadingCellProps) {
  return (
    <div className={styles['cell-leading']}>
      <div className={styles['cell-leading-media']}>{media}</div>
      <TextCell primary={primary} caption={caption} bold={bold} />
    </div>
  );
}

/* DockIconCell — rounded square icon container + text */
export interface DockIconCellProps {
  icon: React.ReactNode;
  primary: React.ReactNode;
  caption?: React.ReactNode;
}

export function DockIconCell({ icon, primary, caption }: DockIconCellProps) {
  return (
    <div className={styles['cell-leading']}>
      <div className={styles['cell-dock-icon']}>{icon}</div>
      <TextCell primary={primary} caption={caption} />
    </div>
  );
}

/* TrendCell — up / down / neutral badge */
export type TrendDirection = 'up' | 'down' | 'neutral';

export interface TrendCellProps {
  label: string;
  direction: TrendDirection;
  icon?: React.ReactNode;
}

export function TrendCell({ label, direction, icon }: TrendCellProps) {
  const badgeClass = [
    styles['cell-trend-badge'],
    direction === 'up'
      ? styles['cell-trend-up']
      : direction === 'down'
      ? styles['cell-trend-down']
      : styles['cell-trend-neutral'],
  ].join(' ');

  return (
    <div className={badgeClass}>
      {icon}
      <span className={styles['cell-trend-label']}>{label}</span>
    </div>
  );
}

/* ActionCell — ellipsis / icon button */
export interface ActionCellProps {
  icon: React.ReactNode;
  onClick?: () => void;
  label?: string;
}

export function ActionCell({ icon, onClick, label = 'Actions' }: ActionCellProps) {
  return (
    <button
      className={styles['cell-action-btn']}
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      {icon}
    </button>
  );
}

/* ── TableExpandRow ── */

export interface TableExpandRowProps {
  /** The <td> data cells of this row */
  children: React.ReactNode;
  /** Child rows rendered when expanded */
  rows?: React.ReactNode;
  /** Indent level — 0 = root, 1 = first child level */
  depth?: number;
  /** Initial expanded state (uncontrolled) */
  defaultExpanded?: boolean;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Controlled toggle callback */
  onToggle?: () => void;
  /** Row visual state */
  state?: CellState;
  className?: string;
}

export function TableExpandRow({
  children,
  rows,
  depth = 0,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onToggle,
  state = 'default',
  className,
}: TableExpandRowProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded! : internalExpanded;

  const handleToggle = () => {
    if (!isControlled) setInternalExpanded((v) => !v);
    onToggle?.();
  };

  const hasChildren = !!rows;

  const trClass = [
    styles.tr,
    depth > 0 ? styles['tr-child'] : '',
    className,
  ].filter(Boolean).join(' ');

  const toggleCellClass = [
    styles.td,
    styles['td-toggle'],
    depth > 0 ? styles[`td-toggle-depth-${Math.min(depth, 3)}`] : '',
    state === 'hover'    ? styles['td-hover']    : '',
    state === 'selected' ? styles['td-selected'] : '',
    state === 'focused'  ? styles['td-focused']  : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <tr className={trClass}>
        {/* Toggle cell */}
        <td className={toggleCellClass}>
          {hasChildren ? (
            <button
              className={styles['expand-btn']}
              onClick={handleToggle}
              aria-expanded={expanded}
              type="button"
            >
              <ExpandIcon expanded={expanded} />
            </button>
          ) : null}
        </td>
        {children}
      </tr>

      {hasChildren && expanded && rows}
    </>
  );
}
