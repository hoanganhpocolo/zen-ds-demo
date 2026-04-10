import { useState, useCallback } from 'react';
import { Sidebar, SidebarItem, PopoverItem } from '@zen/components';
import type { WorkspaceItem } from '@zen/components';
import {
  Home03, BarChart01, Users, Settings01, Bell01,
  ShoppingCart, Calendar, Mail01, Globe01,
  Activity, CreditCard, FileDoc, Heart, Lock01,
} from '@zen/icons/line';
import { getApp } from './app-registry';
import { AppIcon } from './AppIcon';
import { useDarkMode } from './useDarkMode';
import { HomePage } from './pages/HomePage';
import './App.css';

function DockLogo() {
  const { dark } = useDarkMode();
  return <img src={dark ? '/vnggames-logo-dark.svg' : '/vnggames-logo.svg'} alt="VNGGames" width={40} height={28} />;
}

function dockIcon(appId: string) {
  const app = getApp(appId);
  if (!app) return null;
  return <AppIcon icon={app.icon} semantic={app.semantic} size="md" />;
}

export function App() {
  const [page, setPage] = useState('dashboard');
  const [ws, setWs] = useState('portal');
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [mobileSidebarClosing, setMobileSidebarClosing] = useState(false);

  const closeMobileSidebar = useCallback(() => {
    setMobileSidebarClosing(true);
    setTimeout(() => {
      setMobileSidebar(false);
      setMobileSidebarClosing(false);
    }, 250);
  }, []);

  const workspaces: WorkspaceItem[] = [
    {
      id: 'portal',
      label: 'Portal',
      icon: dockIcon('home'),
      children: (
        <>
          <SidebarItem icon={<Home03 size={20} />} label="Dashboard" selected={page === 'dashboard'} onClick={() => setPage('dashboard')} />
          <SidebarItem icon={<BarChart01 size={20} />} label="Analytics" selected={page === 'analytics'} onClick={() => setPage('analytics')} />
          <SidebarItem icon={<Users size={20} />} label="Users" counter={128} selected={page === 'users'} onClick={() => setPage('users')} />
          <SidebarItem icon={<Mail01 size={20} />} label="Messages" counter={3} selected={page === 'messages'} onClick={() => setPage('messages')} />
          <SidebarItem icon={<Calendar size={20} />} label="Calendar" selected={page === 'calendar'} onClick={() => setPage('calendar')} />
          <SidebarItem icon={<ShoppingCart size={20} />} label="Orders" selected={page === 'orders'} onClick={() => setPage('orders')} />
          <SidebarItem icon={<Globe01 size={20} />} label="Website" selected={page === 'website'} onClick={() => setPage('website')} />
        </>
      ),
      footer: (
        <>
          <SidebarItem icon={<Settings01 size={20} />} label="Settings" selected={page === 'settings'} onClick={() => setPage('settings')} />
          <SidebarItem icon={<Bell01 size={20} />} label="Notifications" counter={5} />
        </>
      ),
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: dockIcon('docs'),
      children: (
        <>
          <SidebarItem icon={<CreditCard size={20} />} label="Invoices" selected={page === 'invoices'} onClick={() => setPage('invoices')} />
          <SidebarItem icon={<FileDoc size={20} />} label="Statements" selected={page === 'statements'} onClick={() => setPage('statements')} />
          <SidebarItem icon={<ShoppingCart size={20} />} label="Subscriptions" selected={page === 'subscriptions'} onClick={() => setPage('subscriptions')} />
          <SidebarItem icon={<Activity size={20} />} label="Usage" selected={page === 'usage'} onClick={() => setPage('usage')} />
        </>
      ),
      footer: (
        <SidebarItem icon={<Settings01 size={20} />} label="Billing Settings" />
      ),
    },
    {
      id: 'crm',
      label: 'CRM',
      icon: dockIcon('apollo'),
      children: (
        <>
          <SidebarItem icon={<Users size={20} />} label="Contacts" selected={page === 'contacts'} onClick={() => setPage('contacts')} />
          <SidebarItem icon={<Heart size={20} />} label="Deals" selected={page === 'deals'} onClick={() => setPage('deals')} />
          <SidebarItem icon={<Mail01 size={20} />} label="Campaigns" selected={page === 'campaigns'} onClick={() => setPage('campaigns')} />
          <SidebarItem icon={<Globe01 size={20} />} label="Leads" selected={page === 'leads'} onClick={() => setPage('leads')} />
          <SidebarItem icon={<BarChart01 size={20} />} label="Reports" selected={page === 'reports'} onClick={() => setPage('reports')} />
        </>
      ),
    },
    {
      id: 'hr',
      label: 'Human Resources',
      icon: dockIcon('analytics'),
      children: (
        <>
          <SidebarItem icon={<Users size={20} />} label="Employees" selected={page === 'employees'} onClick={() => setPage('employees')} />
          <SidebarItem icon={<Calendar size={20} />} label="Time Off" selected={page === 'timeoff'} onClick={() => setPage('timeoff')} />
          <SidebarItem icon={<Lock01 size={20} />} label="Permissions" selected={page === 'permissions'} onClick={() => setPage('permissions')} />
        </>
      ),
    },
  ];

  const activeWs = workspaces.find(w => w.id === ws);

  return (
    <div className="portal-layout">
      <div className="portal-sidebar">
        <Sidebar
          variant="dock"
          fixed
          defaultExpanded={false}
          workspaces={workspaces}
          activeWorkspace={ws}
          onWorkspaceChange={(id) => { setWs(id); setPage('dashboard'); }}
          onAddWorkspace={() => alert('Add workspace')}
          dockHeader={<DockLogo />}
          workspaceDropdown={
            <div className="portal-ws-dropdown">
              <PopoverItem label="Workspace Settings" noCheck />
              <PopoverItem label="Invite Members" noCheck />
              <PopoverItem label="Manage Workspaces" noCheck />
            </div>
          }
        />
      </div>

      <main className="portal-main">
        <div className="portal-content">
          {page === 'dashboard' && <HomePage onMenuClick={() => setMobileSidebar(true)} />}
          {page !== 'dashboard' && (
            <div className="portal-empty">
              <h2 className="text-h4">{activeWs?.label} — {page.charAt(0).toUpperCase() + page.slice(1)}</h2>
              <p className="text-body-base portal-empty-text">Page coming soon...</p>
            </div>
          )}
        </div>
      </main>

      {/* Mobile sidebar overlay */}
      {mobileSidebar && (
        <div className={`portal-mobile-overlay ${mobileSidebarClosing ? 'portal-mobile-closing' : ''}`} onClick={closeMobileSidebar}>
          <div className={`portal-mobile-sidebar ${mobileSidebarClosing ? 'portal-mobile-sidebar-closing' : ''}`} onClick={e => e.stopPropagation()}>
            <Sidebar
              variant="dock"
              expanded={true}
              workspaces={workspaces}
              activeWorkspace={ws}
              onWorkspaceChange={(id) => { setWs(id); setPage('dashboard'); }}
              dockHeader={<DockLogo />}
              closeButton
              onClose={closeMobileSidebar}
              workspaceDropdown={
                <div className="portal-ws-dropdown">
                  <PopoverItem label="Workspace Settings" noCheck />
                  <PopoverItem label="Invite Members" noCheck />
                  <PopoverItem label="Manage Workspaces" noCheck />
                </div>
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
