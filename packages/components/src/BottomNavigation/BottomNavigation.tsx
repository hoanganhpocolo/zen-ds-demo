import type { HTMLAttributes, ReactNode } from 'react';
import { Plus } from '@zen/icons/line';
import styles from './BottomNavigation.module.css';

export type BottomNavTheme = 'accent' | 'neutral';

/* ─────────────────────────────────────────
   Home Indicator — iOS-style (34px)
───────────────────────────────────────── */

function HomeIndicator() {
  return (
    <div className={styles.homeIndicator}>
      <div className={styles.homeIndicatorPill} />
    </div>
  );
}

/* ─────────────────────────────────────────
   BottomNavItem
───────────────────────────────────────── */

export interface BottomNavItemData {
  id: string;
  /** 'default' shows icon+label tab; 'action' shows a 48×48 circle with Plus icon */
  type?: 'default' | 'action';
  /** Icon shown when inactive (line style) — used only for type='default' */
  icon?: ReactNode;
  /** Icon shown when active — defaults to icon if not provided (solid style recommended) */
  activeIcon?: ReactNode;
  label: string;
}

interface BottomNavItemProps {
  item: BottomNavItemData;
  active: boolean;
  onClick: () => void;
}

function BottomNavItem({ item, active, onClick }: BottomNavItemProps) {
  if (item.type === 'action') {
    return (
      <button
        type="button"
        className={[styles.item, styles['item-action']].join(' ')}
        onClick={onClick}
        aria-label={item.label}
      >
        <span className={styles.actionCircle}>
          <Plus size={24} />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={[styles.item, active ? styles['item-active'] : styles['item-default']].join(' ')}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      aria-label={item.label}
    >
      <span className={styles.iconWrap}>
        {active && item.activeIcon ? item.activeIcon : item.icon}
      </span>
      <span className={['text-caption', styles.label].join(' ')}>{item.label}</span>
    </button>
  );
}

/* ─────────────────────────────────────────
   BottomNavigation
───────────────────────────────────────── */

export interface BottomNavigationProps extends HTMLAttributes<HTMLDivElement> {
  items: BottomNavItemData[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  theme?: BottomNavTheme;
  /** Show iOS-style home indicator below the bar */
  showHomeIndicator?: boolean;
}

export function BottomNavigation({
  items,
  activeId,
  onItemClick,
  theme = 'accent',
  showHomeIndicator = true,
  className,
  style,
  ...rest
}: BottomNavigationProps) {
  const rootClass = [
    styles.root,
    styles[`theme-${theme}`],
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClass} style={style} {...rest}>
      <nav className={styles.bar} role="tablist">
        {items.map((item) => (
          <BottomNavItem
            key={item.id}
            item={item}
            active={item.id === activeId}
            onClick={() => onItemClick?.(item.id)}
          />
        ))}
      </nav>
      {showHomeIndicator && <HomeIndicator />}
    </div>
  );
}

BottomNavigation.displayName = 'BottomNavigation';
