import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import styles from './Tab.module.css';

export type TabStyle = 'indicator' | 'subtle';
export type TabSize = 'm' | 's';

export interface TabItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label?: ReactNode;
  icon?: ReactNode;
  tabStyle?: TabStyle;
  size?: TabSize;
  selected?: boolean;
}

export interface TabGroupProps {
  children: ReactNode;
  tabStyle?: TabStyle;
  size?: TabSize;
  className?: string;
}

export function TabItem({
  label,
  icon,
  tabStyle = 'indicator',
  size = 'm',
  selected = false,
  disabled = false,
  className,
  ...rest
}: TabItemProps) {
  const isIconOnly = icon && !label;

  const outerClass = [
    styles.outer,
    styles[`outer-${tabStyle}`],
    selected ? styles[`outer-${tabStyle}-selected`] : '',
    disabled ? styles['outer-disabled'] : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const fillClass = [
    styles.fill,
    styles[`fill-${tabStyle}`],
    isIconOnly ? styles['fill-icon-only'] : '',
    selected ? styles[`fill-${tabStyle}-selected`] : '',
  ].filter(Boolean).join(' ');

  const contentClass = [
    styles.content,
    styles[`content-${size}`],
    icon && label ? styles['content-with-icon'] : '',
  ].filter(Boolean).join(' ');

  const textClass = [
    styles.label,
    styles[`label-${tabStyle}`],
    selected ? styles[`label-${tabStyle}-selected`] : '',
  ].filter(Boolean).join(' ');

  return (
    <button className={outerClass} disabled={disabled} role="tab" aria-selected={selected} {...rest}>
      <div className={fillClass}>
        <div className={contentClass}>
          {icon && (
            <span
              className={[
                styles.icon,
                styles[`icon-${size}`],
                styles[`icon-${tabStyle}`],
                selected ? styles[`icon-${tabStyle}-selected`] : '',
              ].filter(Boolean).join(' ')}
            >
              {icon}
            </span>
          )}
          {label && (
            <span className={textClass} data-text={typeof label === 'string' ? label : undefined}>
              {label}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

export function TabGroup({ children, tabStyle = 'indicator', className }: TabGroupProps) {
  return (
    <div className={[styles.group, styles[`group-${tabStyle}`], className ?? ''].filter(Boolean).join(' ')} role="tablist">
      {children}
    </div>
  );
}

TabItem.displayName = 'TabItem';
TabGroup.displayName = 'TabGroup';
