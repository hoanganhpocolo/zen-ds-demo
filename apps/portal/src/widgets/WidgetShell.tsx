import { type ReactNode } from 'react';
import './widgets.css';
import './widget-content.css';

export interface WidgetShellProps {
  title: string;
  icon?: ReactNode;
  actions?: ReactNode;
  /** Slot for dots menu — injected by DashboardGrid */
  menu?: ReactNode;
  children: ReactNode;
  flush?: boolean;
}

export function WidgetShell({ title, icon, actions, menu, children, flush }: WidgetShellProps) {
  return (
    <div className="widget-shell">
      <div className="widget-header">
        {(title || icon) && (
          <div className="widget-title">
            {icon && <span className="widget-title-icon">{icon}</span>}
            {title && <span className="text-body-base wc-widget-title-text">{title}</span>}
          </div>
        )}
        <div className="widget-actions">
          {actions}
          {menu}
        </div>
      </div>
      <div className={flush ? 'widget-body-flush' : 'widget-body'}>
        {children}
      </div>
    </div>
  );
}
