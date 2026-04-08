import { useState, useEffect } from 'react';
import { Sidebar, SidebarItem, PopoverItem } from '@zen/components';
import type { WorkspaceItem } from '@zen/components';
import {
  Home03, BarChart01, Users, Settings01, Bell01,
  ShoppingCart, Calendar, Mail01, Globe01,
  Activity, CreditCard, FileDoc, Heart, Lock01,
} from '@zen/icons/line';
// Icons used by workspace sidebar items
import { HomePage } from './pages/HomePage';
import './App.css';

function DockLogo() {
  const [dark, setDark] = useState(document.documentElement.getAttribute('data-theme') === 'dark');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.getAttribute('data-theme') === 'dark');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return <img src={dark ? '/vnggames-logo-dark.svg' : '/vnggames-logo.svg'} alt="VNGGames" width={40} height={28} />;
}

export function App() {
  const [page, setPage] = useState('dashboard');
  const [ws, setWs] = useState('portal');

  const workspaces: WorkspaceItem[] = [
    {
      id: 'portal',
      label: 'Portal',
      color: '#ad7f58',
      icon: <Home03 size={20} color="white" />,
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
      color: '#4858e5',
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
      color: '#e5486a',
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
      color: '#48b5e5',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <PopoverItem label="Workspace Settings" noCheck />
            <PopoverItem label="Invite Members" noCheck />
            <PopoverItem label="Manage Workspaces" noCheck />
          </div>
        }
      />

      <main className="portal-main">
        <div className="portal-content">
          {page === 'dashboard' && <HomePage />}
          {page !== 'dashboard' && (
            <div className="portal-empty">
              <h2 className="text-h4">{activeWs?.label} — {page.charAt(0).toUpperCase() + page.slice(1)}</h2>
              <p className="text-body-base" style={{ color: 'var(--color-content-neutral-tertiary)' }}>Page coming soon...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

