import {
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
  type AnchorHTMLAttributes,
} from 'react';
import styles from './Breadcrumb.module.css';

/* ══════════════════════════════════════════
   BreadcrumbItem
   ══════════════════════════════════════════ */

export interface BreadcrumbItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Show home icon (first/root item) */
  master?: boolean;
  /** Custom icon instead of default home icon */
  icon?: ReactNode;
}

// Internal — rendered by Breadcrumb, not exported directly
const BreadcrumbItemInner = forwardRef<
  HTMLAnchorElement,
  BreadcrumbItemProps & { current?: boolean }
>(({ master, icon, current, children, className, ...rest }, ref) => {
  const itemClassNames = [
    styles.item,
    master ? styles['item-master'] : '',
    current ? styles['emphasis-medium'] : styles['emphasis-default'],
    current ? styles['item-current'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const Tag = rest.href || !current ? 'a' : 'span';

  return (
    <Tag
      ref={ref as any}
      className={itemClassNames}
      aria-current={current ? 'page' : undefined}
      {...(rest as any)}
    >
      {master && (
        <span className={styles['icon-wrapper']}>
          {icon || <HomeIcon />}
        </span>
      )}
      {children}
    </Tag>
  );
});

BreadcrumbItemInner.displayName = 'BreadcrumbItem';

export { BreadcrumbItemInner as BreadcrumbItem };

/* ══════════════════════════════════════════
   Breadcrumb
   ══════════════════════════════════════════ */

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** Custom separator (defaults to chevron-right) */
  separator?: ReactNode;
  children: ReactNode;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ separator, children, className, ...rest }, ref) => {
    const items = Array.isArray(children)
      ? children.filter(Boolean)
      : [children];

    const rootClassNames = [styles.root, className ?? '']
      .filter(Boolean)
      .join(' ');

    return (
      <nav
        ref={ref}
        className={rootClassNames}
        aria-label="Breadcrumb"
        {...rest}
      >
        {items.map((child, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={i} style={{ display: 'contents' }}>
              {/* Clone child to inject current prop */}
              {child && typeof child === 'object' && 'props' in child
                ? { ...child, props: { ...child.props, current: isLast } }
                : child}
              {!isLast && (
                <span className={styles.separator}>
                  {separator || '/'}
                </span>
              )}
            </span>
          );
        })}
      </nav>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';

/* ── Inline SVG icons ── */

function HomeIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.45 2.533a2 2 0 0 0-2.9 0L3.1 10.6a1 1 0 0 0-.1 1.3l.1.1H5v7a2 2 0 0 0 2 2h3v-5a2 2 0 1 1 4 0v5h3a2 2 0 0 0 2-2v-7h1.9l.1-.1a1 1 0 0 0-.1-1.3l-7.45-8.067Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
