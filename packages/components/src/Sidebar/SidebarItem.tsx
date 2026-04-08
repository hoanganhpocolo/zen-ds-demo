import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ChevronDown } from '@zen/icons/line';
import { useSidebar } from './SidebarContext';
import styles from './Sidebar.module.css';

export type SidebarItemTheme = 'neutral' | 'accent';
export type SidebarItemLevel = 'master' | 'child';

export interface SidebarItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Item label */
  label?: string;
  /** Leading icon */
  icon?: ReactNode;
  /** Highlight as selected/active */
  selected?: boolean;
  /** Color theme for selected state */
  theme?: SidebarItemTheme;
  /** Indent level */
  level?: SidebarItemLevel;
  /** Counter badge value */
  counter?: number | string;
  /** Show a trailing dropdown chevron */
  dropdown?: boolean;
  /** Rotate chevron when open */
  dropdownOpen?: boolean;
}

export function SidebarItem({
  label,
  icon,
  selected = false,
  theme = 'neutral',
  level = 'master',
  counter,
  dropdown = false,
  dropdownOpen = false,
  disabled,
  className,
  onClick,
  ...rest
}: SidebarItemProps) {
  const { collapsed } = useSidebar();

  const itemClasses = [
    styles.item,
    styles[`theme-${theme}`],
    selected ? styles['item-selected'] : styles['item-unselected'],
    disabled ? styles['item-disabled'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const button = (
    <button
      type="button"
      className={itemClasses}
      disabled={disabled}
      onClick={onClick}
      aria-current={selected ? 'page' : undefined}
      {...rest}
    >
      {icon && <span className={styles['item-icon']}>{icon}</span>}

      {!collapsed && label && (
        <span className={styles['item-label']}>{label}</span>
      )}

      {!collapsed && counter !== undefined && (
        <span className={[
          styles['item-counter'],
          selected ? styles['item-counter-selected'] : '',
        ].filter(Boolean).join(' ')}>
          {counter}
        </span>
      )}

      {!collapsed && dropdown && (
        <span className={[
          styles['item-dropdown'],
          dropdownOpen ? styles['item-dropdown-open'] : '',
        ].filter(Boolean).join(' ')}>
          <ChevronDown size={16} />
        </span>
      )}
    </button>
  );

  if (level === 'child') {
    return (
      <div className={styles['child-row']}>
        <span className={styles['tree-line']} aria-hidden />
        {button}
      </div>
    );
  }

  return button;
}

SidebarItem.displayName = 'SidebarItem';
