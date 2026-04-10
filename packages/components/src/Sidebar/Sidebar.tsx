import { useState, useCallback, useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { LayoutLeft, Plus, XSmall } from '@zen/icons/line';
import { Button } from '../Button';
import { SidebarContext } from './SidebarContext';
import styles from './Sidebar.module.css';

export type SidebarBackground = 'default' | 'alternate';
export type SidebarVariant = 'default' | 'dock';

export interface WorkspaceItem {
  /** Unique id */
  id: string;
  /** Display label (initial letter shown if no icon) */
  label: string;
  /** Background color */
  color?: string;
  /** Custom icon (overrides initial letter) */
  icon?: ReactNode;
  /** Sidebar items for this workspace */
  children?: ReactNode;
  /** Footer items for this workspace */
  footer?: ReactNode;
}

export interface SidebarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  background?: SidebarBackground;
  /** Layout variant: 'default' = collapsible card, 'dock' = workspace dock + slide panel */
  variant?: SidebarVariant;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Use fixed positioning (full viewport height) */
  fixed?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  /** Workspace items for dock variant */
  workspaces?: WorkspaceItem[];
  /** Active workspace id */
  activeWorkspace?: string;
  /** Called when workspace is clicked */
  onWorkspaceChange?: (id: string) => void;
  /** Called when add workspace button is clicked */
  onAddWorkspace?: () => void;
  /** Custom dock header (logo). Default: zen-mark */
  dockHeader?: ReactNode;
  /** Dropdown content when clicking workspace name in panel header */
  workspaceDropdown?: ReactNode;
  /** Show close button instead of pin button in dock panel header */
  closeButton?: boolean;
  /** Called when close button is clicked */
  onClose?: () => void;
}

export function Sidebar({
  background = 'default',
  variant = 'default',
  expanded,
  defaultExpanded = true,
  onExpandedChange,
  fixed = false,
  header,
  footer,
  children,
  className,
  workspaces = [],
  activeWorkspace,
  onWorkspaceChange,
  onAddWorkspace,
  dockHeader,
  workspaceDropdown,
  closeButton,
  onClose,
  ...rest
}: SidebarProps) {
  const isControlled = expanded !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const [hovered, setHovered] = useState(false);
  const isPinned = isControlled ? expanded : internalExpanded;

  const isVisuallyExpanded = isPinned || hovered;

  const togglePin = useCallback(() => {
    if (!isControlled) setInternalExpanded((v) => !v);
    onExpandedChange?.(!isPinned);
  }, [isControlled, isPinned, onExpandedChange]);

  const handleMouseEnter = useCallback(() => {
    if (!isPinned) setHovered(true);
  }, [isPinned]);

  const handleMouseLeave = useCallback(() => {
    if (!isPinned) setHovered(false);
  }, [isPinned]);

  if (variant === 'dock') {
    return (
      <DockSidebar
        background={background}
        fixed={fixed}
        isPinned={isPinned}
        isVisuallyExpanded={isVisuallyExpanded}
        hovered={hovered}
        onEnter={handleMouseEnter}
        onLeave={handleMouseLeave}
        togglePin={togglePin}
        header={header}
        footer={footer}
        className={className}
        workspaces={workspaces}
        activeWorkspace={activeWorkspace}
        onWorkspaceChange={onWorkspaceChange}
        onAddWorkspace={onAddWorkspace}
        dockHeader={dockHeader}
        workspaceDropdown={workspaceDropdown}
        closeButton={closeButton}
        onClose={onClose}
      >
        {children}
      </DockSidebar>
    );
  }

  // ── Default variant ──
  const rootClasses = [
    styles.root,
    isPinned ? styles.pinned : styles.unpinned,
    !isPinned && hovered ? styles.hovered : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const cardClasses = [
    styles.card,
    background === 'alternate' ? styles['bg-alternate'] : styles['bg-default'],
  ].join(' ');

  return (
    <SidebarContext.Provider value={{ collapsed: !isVisuallyExpanded }}>
      <div className={rootClasses} {...rest}>
        <div
          className={fixed ? styles['sidebar-fixed'] : styles['sidebar-inline']}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={cardClasses}>
            {header !== null && (
              <div className={styles.header}>
                {header ?? (
                  <DefaultHeader
                    isVisuallyExpanded={isVisuallyExpanded}
                    isPinned={isPinned}
                    togglePin={togglePin}
                  />
                )}
              </div>
            )}
            <div className={[styles.body, !isVisuallyExpanded ? styles['body-collapsed'] : ''].filter(Boolean).join(' ')}>
              <div className={styles['item-list']}>{children}</div>
            </div>
            {footer != null && (
              <>
                <div className={styles.divider} />
                <div className={[styles.footer, !isVisuallyExpanded ? styles['footer-collapsed'] : ''].filter(Boolean).join(' ')}>
                  <div className={styles['item-list']}>{footer}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}

Sidebar.displayName = 'Sidebar';

/* ── Default header (shared) ── */

function DefaultHeader({
  isVisuallyExpanded,
  isPinned,
  togglePin,
}: {
  isVisuallyExpanded: boolean;
  isPinned: boolean;
  togglePin: () => void;
}) {
  return (
    <div className={styles['header-default']}>
      <span className={styles['logo-mark']}>
        <img src="/zen-mark.svg" alt="Zen" width={36} height={36} />
      </span>
      {isVisuallyExpanded && (
        <span className={styles['header-logo']}>
          <span className={styles['logo-text']}>Zen</span>
          <span className={styles['logo-badge']}>Kaiz</span>
        </span>
      )}
      {isVisuallyExpanded && <span style={{ flex: 1 }} />}
      {isVisuallyExpanded && (
        <Button
          variant="flat-primary"
          size="m"
          icon={<LayoutLeft size={20} />}
          onClick={(e) => { e.stopPropagation(); togglePin(); }}
          aria-label={isPinned ? 'Collapse sidebar' : 'Pin sidebar'}
        />
      )}
    </div>
  );
}

/* ── Dock variant ── */

function DockSidebar({
  background,
  fixed,
  isPinned,
  isVisuallyExpanded,
  hovered,
  onEnter,
  onLeave,
  togglePin,
  header,
  footer,
  children,
  className,
  workspaces,
  activeWorkspace,
  onWorkspaceChange,
  onAddWorkspace,
  dockHeader,
  workspaceDropdown,
  closeButton,
  onClose,
}: {
  background: SidebarBackground;
  fixed: boolean;
  isPinned: boolean;
  isVisuallyExpanded: boolean;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  togglePin: () => void;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  workspaces: WorkspaceItem[];
  activeWorkspace?: string;
  onWorkspaceChange?: (id: string) => void;
  onAddWorkspace?: () => void;
  dockHeader?: ReactNode;
  workspaceDropdown?: ReactNode;
  closeButton?: boolean;
  onClose?: () => void;
}) {
  const [showWsDropdown, setShowWsDropdown] = useState(false);
  const wsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showWsDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wsDropdownRef.current && !wsDropdownRef.current.contains(e.target as Node)) {
        setShowWsDropdown(false);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [showWsDropdown]);

  const activeWs = workspaces.find((w) => w.id === activeWorkspace);
  const rootClasses = [
    styles['dock-root'],
    isPinned ? styles['dock-pinned'] : styles['dock-unpinned'],
    className ?? '',
  ].filter(Boolean).join(' ');

  const dockClasses = [
    styles.dock,
    background === 'alternate' ? styles['bg-alternate'] : styles['bg-default'],
  ].join(' ');

  const panelClasses = [
    styles['dock-panel'],
    background === 'alternate' ? styles['bg-alternate'] : styles['bg-default'],
    isVisuallyExpanded ? styles['dock-panel-open'] : styles['dock-panel-closed'],
  ].join(' ');

  return (
    <SidebarContext.Provider value={{ collapsed: true }}>
      <div className={rootClasses}>
        <div
          className={fixed ? styles['dock-container-fixed'] : styles['dock-container-inline']}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >

          {/* ── Dock strip (always visible, workspaces) ── */}
          <div className={dockClasses}>
            {/* Dock header — logo */}
            <div className={styles['dock-header']}>
              {dockHeader ?? (
                <span className={styles['logo-mark']}>
                  <img src="/zen-mark.svg" alt="Zen" width={40} height={28} />
                </span>
              )}
            </div>

            {/* Dock body — workspace icons */}
            <div className={styles['dock-body']}>
              <div className={styles['workspace-list']}>
                {workspaces.map((ws) => (
                  <button
                    key={ws.id}
                    type="button"
                    className={[
                      styles['workspace-item'],
                      ws.id === activeWorkspace ? styles['workspace-active'] : '',
                    ].filter(Boolean).join(' ')}
                    style={ws.color ? { background: ws.color } as React.CSSProperties : undefined}
                    onClick={() => { onWorkspaceChange?.(ws.id); onEnter(); }}
                    aria-label={ws.label}
                    title={ws.label}
                  >
                    {ws.icon ?? (
                      <span className={styles['workspace-initial']}>
                        {ws.label.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </button>
                ))}
                {onAddWorkspace && (
                  <Button
                    variant="tertiary"
                    size="m"
                    icon={<Plus size={20} />}
                    onClick={onAddWorkspace}
                    aria-label="Add workspace"
                  />
                )}
              </div>
            </div>
          </div>

          {/* ── Panel (slide-out, full labels) ── */}
          <div className={panelClasses}>
            {/* Panel header — workspace name + dropdown + collapse */}
            <div className={styles.header}>
              <div className={styles['header-default']}>
                <button
                  type="button"
                  className={styles['ws-header-btn']}
                  onClick={() => setShowWsDropdown((v) => !v)}
                >
                  <span className={styles['ws-header-name']}>
                    {activeWs?.label ?? 'Workspace'}
                  </span>
                  <ChevronDownIcon size={20} />
                </button>
                <span style={{ flex: 1 }} />
                {closeButton ? (
                  <Button
                    variant="flat-primary"
                    size="m"
                    icon={<XSmall size={20} />}
                    onClick={(e) => { e.stopPropagation(); onClose?.(); }}
                    aria-label="Close sidebar"
                  />
                ) : (
                  <Button
                    variant="flat-primary"
                    size="m"
                    icon={<LayoutLeft size={20} />}
                    onClick={(e) => { e.stopPropagation(); togglePin(); }}
                    aria-label={isPinned ? 'Collapse sidebar' : 'Pin sidebar'}
                  />
                )}
              </div>
              {/* Workspace dropdown */}
              {showWsDropdown && workspaceDropdown && (
                <div ref={wsDropdownRef} className={styles['ws-dropdown']} onClick={() => setShowWsDropdown(false)}>
                  {workspaceDropdown}
                </div>
              )}
            </div>

            {/* Panel body — active workspace items or fallback children */}
            <div className={styles.body}>
              <SidebarContext.Provider value={{ collapsed: false }}>
                <div className={styles['item-list']}>
                  {activeWs?.children ?? children}
                </div>
              </SidebarContext.Provider>
            </div>

            {/* Panel footer — workspace footer or fallback */}
            {(activeWs?.footer ?? footer) != null && (
              <>
                <div className={styles.divider} />
                <div className={styles.footer}>
                  <SidebarContext.Provider value={{ collapsed: false }}>
                    <div className={styles['item-list']}>
                      {activeWs?.footer ?? footer}
                    </div>
                  </SidebarContext.Provider>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </SidebarContext.Provider>
  );
}

/* ── Inline SVG icons ── */

function ChevronDownIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

