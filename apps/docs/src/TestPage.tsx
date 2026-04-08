import { useState } from 'react';
import { Sidebar, SidebarItem, Popover, PopoverItem } from '@zen/components';
import type { WorkspaceItem } from '@zen/components';
import {
  Home03, BarChart01, Users, Settings01, Bell01,
  Mail01, Calendar, ShoppingCart, Globe01, Heart,
  CreditCard, FileDoc, Lock01, Activity,
} from '@zen/icons/line';

const labelStyle: React.CSSProperties = { color: 'var(--color-content-neutral-secondary)' };

function DockSidebarDemo() {
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
        </>
      ),
      footer: (
        <>
          <SidebarItem icon={<Settings01 size={20} />} label="Settings" onClick={() => setPage('settings')} selected={page === 'settings'} />
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
    <div style={{ display: 'flex', height: 700, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-2xlarge)', overflow: 'hidden', background: 'var(--color-bg-canvas-default)' }}>
      <Sidebar
        variant="dock"
        background="default"
        defaultExpanded={false}
        workspaces={workspaces}
        activeWorkspace={ws}
        onWorkspaceChange={(id) => { setWs(id); setPage('dashboard'); }}
        onAddWorkspace={() => alert('Add workspace')}
        workspaceDropdown={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <PopoverItem label="Workspace Settings" noCheck />
            <PopoverItem label="Invite Members" noCheck />
            <PopoverItem label="Switch Workspace" noCheck />
          </div>
        }
      />

      <div style={{ flex: 1, padding: 'var(--padding-2xlarge)', overflow: 'auto' }}>
        <h2 className="text-h3" style={{ marginBottom: 4 }}>
          {activeWs?.label ?? 'Workspace'} — {page.charAt(0).toUpperCase() + page.slice(1)}
        </h2>
        <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)', marginBottom: 'var(--gap-large)' }}>
          Click workspace icons to switch. Each workspace has different sidebar items.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-medium)' }}>
          {[
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
          ].map((bg, i) => (
            <div key={i} style={{
              width: 180, height: 120,
              borderRadius: 'var(--radius-large)',
              background: bg,
              display: 'flex', alignItems: 'flex-end', padding: 12,
              color: 'white', fontSize: 13, fontWeight: 600,
            }}>
              Card {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestPage() {
  return (
    <div style={{ padding: 'var(--padding-2xlarge)', maxWidth: 1100, display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xlarge)' }}>
      <h1 className="text-h2">Sidebar — Dock + Workspaces</h1>
      <section>
        <h3 className="text-body-small" style={labelStyle}>
          Each workspace has its own sidebar items. Click workspace name dropdown for options.
        </h3>
        <div style={{ marginTop: 'var(--gap-medium)' }}>
          <DockSidebarDemo />
        </div>
      </section>
    </div>
  );
}
