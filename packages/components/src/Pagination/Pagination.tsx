import { forwardRef, type HTMLAttributes, type SelectHTMLAttributes } from 'react';
import { ChevronLeftLineSmall, ChevronRightLineSmall, ChevronDown } from '@zen/icons/line';
import styles from './Pagination.module.css';

export type PaginationTheme = 'primary' | 'secondary' | 'inline';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Visual theme */
  theme?: PaginationTheme;
  /** Current page (1-indexed) */
  page: number;
  /** Total number of pages — required for primary/secondary */
  totalPages?: number;
  /** Total number of items — required for inline */
  total?: number;
  /** Items per page — used in inline for range display */
  pageSize?: number;
  /** Page size options shown in inline dropdown */
  pageSizeOptions?: number[];
  /** Called when the user navigates to a page */
  onChange?: (page: number) => void;
  /** Called when the user changes page size (inline only) */
  onPageSizeChange?: (size: number) => void;
}

/** Returns a page range array (7 items) with '...' ellipsis markers */
function getPageRange(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, 4, 5, '...', total];
  }
  if (current >= total - 2) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      theme = 'primary',
      page,
      totalPages = 1,
      total = 0,
      pageSize = 10,
      pageSizeOptions = [10, 20, 50, 100],
      onChange,
      onPageSizeChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const isInline = theme === 'inline';
    const isPrimary = theme === 'primary';

    const canPrev = page > 1;
    const canNext = isInline ? page * pageSize < total : page < totalPages;

    const rangeStart = (page - 1) * pageSize + 1;
    const rangeEnd = Math.min(page * pageSize, total);

    const pageRange = !isInline ? getPageRange(page, totalPages) : [];

    return (
      <div
        ref={ref}
        className={[styles.root, className ?? ''].filter(Boolean).join(' ')}
        {...rest}
      >
        {/* ── Primary / Secondary ── */}
        {!isInline && (
          <>
            {/* Prev */}
            <button
              className={styles['nav-btn']}
              onClick={() => canPrev && onChange?.(page - 1)}
              disabled={!canPrev}
              aria-label="Previous page"
            >
              <ChevronLeftLineSmall size={20} />
            </button>

            {/* Page numbers */}
            <div className={styles.pages}>
              {pageRange.map((item, i) =>
                item === '...' ? (
                  <span key={`ellipsis-${i}`} className={styles.ellipsis}>
                    {item}
                  </span>
                ) : (
                  <button
                    key={item}
                    className={[
                      styles['page-btn'],
                      item === page
                        ? isPrimary
                          ? styles['page-btn-active-primary']
                          : styles['page-btn-active-secondary']
                        : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => onChange?.(item)}
                    aria-current={item === page ? 'page' : undefined}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            {/* Next */}
            <button
              className={styles['nav-btn']}
              onClick={() => canNext && onChange?.(page + 1)}
              disabled={!canNext}
              aria-label="Next page"
            >
              <ChevronRightLineSmall size={20} />
            </button>
          </>
        )}

        {/* ── Inline ── */}
        {isInline && (
          <>
            {/* Page size selector (chip-style) */}
            <div className={styles['inline-chip']}>
              <span>{pageSize} results</span>
              <ChevronDown size={20} className={styles['inline-chevron']} />
              <select
                className={styles['inline-select']}
                value={pageSize}
                onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
                aria-label="Results per page"
              >
                {pageSizeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt} results</option>
                ))}
              </select>
            </div>

            {/* Range label */}
            <span className={styles['inline-range']}>
              {rangeStart}–{rangeEnd} of {total} results
            </span>

            {/* Navigator */}
            <div className={styles['inline-nav']}>
              <button
                className={styles['nav-btn']}
                onClick={() => canPrev && onChange?.(page - 1)}
                disabled={!canPrev}
                aria-label="Previous page"
              >
                <ChevronLeftLineSmall size={20} />
              </button>
              <button
                className={styles['nav-btn']}
                onClick={() => canNext && onChange?.(page + 1)}
                disabled={!canNext}
                aria-label="Next page"
              >
                <ChevronRightLineSmall size={20} />
              </button>
            </div>
          </>
        )}
      </div>
    );
  },
);

Pagination.displayName = 'Pagination';
