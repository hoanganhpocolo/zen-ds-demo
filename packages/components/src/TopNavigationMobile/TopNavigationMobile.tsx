import type { HTMLAttributes, ReactNode } from 'react';
import { Button } from '../Button';
import styles from './TopNavigationMobile.module.css';

export type TopNavMobileTheme = 'default' | 'overlay';

/* ─────────────────────────────────────────
   Status Bar — iOS-style (44px)
───────────────────────────────────────── */

function StatusBar({ theme = 'default' }: { theme?: TopNavMobileTheme }) {
  const isOverlay = theme === 'overlay';
  const color = isOverlay ? 'var(--color-content-white-overlay-primary)' : 'var(--color-content-neutral-primary)';

  return (
    <div className={styles.statusBar}>
      {/* Time */}
      <span className={styles.statusTime} style={{ color }}>9:41</span>

      {/* Right icons — signal, wifi, battery */}
      <div className={styles.statusIcons}>
        {/* Cellular signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.5" fill={color} />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill={color} />
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.5" fill={color} />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill={color} />
        </svg>

        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5C8.83 9.5 9.5 10.17 9.5 11S8.83 12.5 8 12.5 6.5 11.83 6.5 11 7.17 9.5 8 9.5Z" fill={color} />
          <path d="M8 6C9.6 6 11.05 6.65 12.12 7.7L13.54 6.28C12.09 4.86 10.14 4 8 4C5.86 4 3.91 4.86 2.46 6.28L3.88 7.7C4.95 6.65 6.4 6 8 6Z" fill={color} />
          <path d="M8 2C10.76 2 13.25 3.1 15.07 4.93L16.5 3.5C14.3 1.33 11.3 0 8 0C4.7 0 1.7 1.33 -0.5 3.5L0.93 4.93C2.75 3.1 5.24 2 8 2Z" fill={color} />
        </svg>

        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={color} strokeOpacity="0.35" />
          <rect x="2" y="2" width="17" height="8" rx="2" fill={color} />
          <path d="M23 4V8C23.83 7.67 24.5 6.9 24.5 6C24.5 5.1 23.83 4.33 23 4Z" fill={color} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Action Button — Header/Action/Primary (40×40)
───────────────────────────────────────── */

export interface TopNavActionButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  label?: string;
  notiDot?: boolean;
  theme?: TopNavMobileTheme;
}

export function TopNavActionButton({
  icon,
  onClick,
  label,
  notiDot = false,
  theme = 'default',
}: TopNavActionButtonProps) {
  const variant = theme === 'overlay' ? 'white-overlay' : 'tertiary';
  return (
    <div className={styles.actionWrap}>
      <Button variant={variant} size="m" icon={icon} onClick={onClick} aria-label={label} />
      {notiDot && <span className={styles.notiDot} aria-hidden />}
    </div>
  );
}

/* ─────────────────────────────────────────
   TopNavigationMobile
───────────────────────────────────────── */

export interface TopNavigationMobileProps extends HTMLAttributes<HTMLDivElement> {
  theme?: TopNavMobileTheme;
  heading?: string;
  leadingContent?: ReactNode;
  controlSlots?: ReactNode;
  mainSlots?: ReactNode;
  additionContent?: ReactNode;
  showControlBar?: boolean;
  showMainBar?: boolean;
  showAdditionBlock?: boolean;
  /** Sub variant: when false, heading collapses into control bar center and main bar is hidden */
  expanded?: boolean;
}

export function TopNavigationMobile({
  theme = 'default',
  heading = 'Heading',
  leadingContent,
  controlSlots,
  mainSlots,
  additionContent,
  showControlBar = false,
  showMainBar = true,
  showAdditionBlock = false,
  expanded,
  className,
  style,
  ...rest
}: TopNavigationMobileProps) {
  const isOverlay = theme === 'overlay';
  // Sub variant: collapsed mode — heading in control bar center, no main bar
  const isCollapsed = expanded === false;

  const rootClass = [
    styles.root,
    styles[`theme-${theme}`],
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClass} style={style} {...rest}>

      {/* Control Bar (56px) */}
      {showControlBar && (
        <div className={styles.controlBar}>
          <div className={styles.controlLeading}>{leadingContent}</div>
          {/* Sub collapsed: heading centered in control bar */}
          {isCollapsed && (
            <div className={styles.controlCenter}>
              <span className={['text-body-extra-primary', styles.controlHeading, isOverlay ? styles.controlHeadingOverlay : ''].filter(Boolean).join(' ')}>
                {heading}
              </span>
            </div>
          )}
          <div className={styles.controlTrailing}>{controlSlots}</div>
        </div>
      )}

      {/* Main Bar — hidden in collapsed sub mode */}
      {showMainBar && !isCollapsed && (
        <div className={styles.mainBar}>
          <div className={styles.mainHeading}>
            <h1 className={['text-h1', styles.headingText, isOverlay ? styles.headingOverlay : ''].filter(Boolean).join(' ')}>
              {heading}
            </h1>
          </div>
          {mainSlots && (
            <div className={styles.mainTrailing}>
              {mainSlots}
            </div>
          )}
        </div>
      )}

      {/* Addition Block (72px) */}
      {showAdditionBlock && (
        <div className={styles.additionBlock}>
          <div className={styles.additionInner}>
            <div className={styles.additionSlot}>{additionContent}</div>
          </div>
        </div>
      )}

    </div>
  );
}

TopNavigationMobile.displayName = 'TopNavigationMobile';
