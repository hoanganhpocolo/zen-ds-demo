import { useState, type HTMLAttributes, type ReactNode } from 'react';
import { LayoutLeft } from '@zen/icons/line';
import { SidebarContext } from './SidebarContext';
import styles from './Sidebar.module.css';

export type SidebarBackground = 'default' | 'alternate';

export interface SidebarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Surface color */
  background?: SidebarBackground;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Uncontrolled default */
  defaultExpanded?: boolean;
  /** Called when collapse/expand toggled */
  onExpandedChange?: (expanded: boolean) => void;
  /** Custom header slot — replaces the default logo + collapse button */
  header?: ReactNode;
  /** Footer items */
  footer?: ReactNode;
  /** Body items */
  children?: ReactNode;
}

export function Sidebar({
  background = 'default',
  expanded,
  defaultExpanded = true,
  onExpandedChange,
  header,
  footer,
  children,
  className,
  ...rest
}: SidebarProps) {
  const isControlled = expanded !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = isControlled ? expanded : internalExpanded;

  const toggle = () => {
    if (!isControlled) setInternalExpanded((v) => !v);
    onExpandedChange?.(!isExpanded);
  };

  const rootClasses = [
    styles.root,
    isExpanded ? styles.expanded : styles.collapsed,
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const cardClasses = [
    styles.card,
    background === 'alternate' ? styles['bg-alternate'] : styles['bg-default'],
  ].join(' ');

  return (
    <SidebarContext.Provider value={{ collapsed: !isExpanded }}>
      <div className={rootClasses} {...rest}>
        <div className={cardClasses}>

          {/* ── Header ── */}
          {header !== null && (
            <div className={styles.header}>
              {header ?? (
                <div className={styles['header-default']}>
                  {isExpanded && (
                    <span className={styles['header-logo']}>
                      <span className={styles['logo-text']}>Zen</span>
                      <span className={styles['logo-badge']}>Design</span>
                    </span>
                  )}
                  <button
                    type="button"
                    className={styles['collapse-btn']}
                    onClick={toggle}
                    aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
                  >
                    <LayoutLeft size={20} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── Body ── */}
          <div className={[styles.body, !isExpanded ? styles['body-collapsed'] : ''].filter(Boolean).join(' ')}>
            <div className={styles['item-list']}>
              {children}
            </div>
          </div>

          {/* ── Divider + Footer — only when footer content is provided ── */}
          {footer != null && (
            <>
              <div className={styles.divider} />
              <div className={[styles.footer, !isExpanded ? styles['footer-collapsed'] : ''].filter(Boolean).join(' ')}>
                <div className={styles['item-list']}>
                  {footer}
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </SidebarContext.Provider>
  );
}

Sidebar.displayName = 'Sidebar';
