import { useState } from 'react';
import { Sidebar, SidebarItem } from '@zen/components';
import { Home03, Settings01, Settings03, BarChart01, SearchMedium } from '@zen/icons/line';
import { User } from '@zen/icons/line';

export function SidebarPage() {
  const [selected1, setSelected1] = useState('home');
  const [selected2, setSelected2] = useState('home');
  const [selected3, setSelected3] = useState('dashboard');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home03 size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart01 size={20} /> },
    { id: 'search', label: 'Search', icon: <SearchMedium size={20} /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings01 size={20} /> },
  ];

  return (
    <>
      <div className="docs-page-header">
        <div className="docs-page-header-top">
          <div className="docs-page-header-breadcrumb">
            <span className="text-h4" style={{ letterSpacing: '-0.04em' }}>
              <span style={{ color: 'var(--color-content-neutral-primary)' }}>Zen Design System </span>
              <span style={{ color: 'var(--color-content-neutral-tertiary)' }}>by Đìzai Studio</span>
            </span>
          </div>
        </div>
        <div className="docs-page-header-divider" />
        <h1 className="docs-page-title text-display-1">Sidebar</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Navigation sidebar with collapsible state, two backgrounds, and two item themes (Neutral/Accent).
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Expanded sidebars ── */}
        <h2 className="docs-section-title text-h3">Default background</h2>
        <div style={{ display: 'flex', gap: 'var(--gap-large)', alignItems: 'flex-start' }}>

          {/* Expanded — Neutral theme */}
          <div style={{ height: 480 }}>
            <Sidebar
              footer={
                <>
                  <SidebarItem icon={<Settings03 size={20} />} label="Settings" selected={selected1 === 'settings-footer'} onClick={() => setSelected1('settings-footer')} />
                  <SidebarItem icon={<User size={20} />} label="Account" selected={selected1 === 'account'} onClick={() => setSelected1('account')} />
                </>
              }
            >
              {navItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  selected={selected1 === item.id}
                  onClick={() => setSelected1(item.id)}
                />
              ))}
            </Sidebar>
          </div>

          {/* Expanded — Accent theme */}
          <div style={{ height: 480 }}>
            <Sidebar
              footer={
                <>
                  <SidebarItem icon={<Settings03 size={20} />} label="Settings" theme="accent" selected={selected2 === 'settings-footer'} onClick={() => setSelected2('settings-footer')} />
                  <SidebarItem icon={<User size={20} />} label="Account" theme="accent" selected={selected2 === 'account'} onClick={() => setSelected2('account')} />
                </>
              }
            >
              {navItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  theme="accent"
                  selected={selected2 === item.id}
                  onClick={() => setSelected2(item.id)}
                />
              ))}
            </Sidebar>
          </div>

        </div>

        {/* ── Alternate background ── */}
        <h2 className="docs-section-title text-h3">Alternate background</h2>
        <div style={{ display: 'flex', gap: 'var(--gap-large)', alignItems: 'flex-start' }}>

          <div style={{ height: 480 }}>
            <Sidebar
              background="alternate"
              footer={
                <>
                  <SidebarItem icon={<Settings03 size={20} />} label="Settings" />
                  <SidebarItem icon={<User size={20} />} label="Account" />
                </>
              }
            >
              {navItems.map((item) => (
                <SidebarItem key={item.id} icon={item.icon} label={item.label} selected={item.id === 'home'} />
              ))}
            </Sidebar>
          </div>

        </div>

        {/* ── With counter & dropdown ── */}
        <h2 className="docs-section-title text-h3">Counter + Dropdown + Child</h2>
        <div style={{ display: 'flex', gap: 'var(--gap-large)', alignItems: 'flex-start' }}>

          <div style={{ height: 480 }}>
            <Sidebar
              footer={
                <SidebarItem icon={<Settings03 size={20} />} label="Settings" />
              }
            >
              <SidebarItem icon={<Home03 size={20} />} label="Dashboard" selected={selected3 === 'dashboard'} onClick={() => setSelected3('dashboard')} />
              <SidebarItem icon={<BarChart01 size={20} />} label="Analytics" counter={8} selected={selected3 === 'analytics'} onClick={() => setSelected3('analytics')} />
              <SidebarItem icon={<SearchMedium size={20} />} label="Reports" dropdown dropdownOpen={selected3 === 'reports'} selected={selected3 === 'reports'} onClick={() => setSelected3('reports')} />
              {selected3 === 'reports' && (
                <>
                  <SidebarItem label="Monthly" level="child" selected={selected3 === 'monthly'} onClick={() => setSelected3('monthly')} />
                  <SidebarItem label="Quarterly" level="child" />
                  <SidebarItem label="Yearly" level="child" disabled />
                </>
              )}
              <SidebarItem icon={<User size={20} />} label="Users" counter={24} selected={selected3 === 'users'} onClick={() => setSelected3('users')} />
              <SidebarItem icon={<Settings01 size={20} />} label="Config" disabled />
            </Sidebar>
          </div>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API — Sidebar</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>background</code></td><td>Surface color</td><td><code>"default" | "alternate"</code></td><td><code>"default"</code></td></tr>
            <tr><td><code>expanded</code></td><td>Controlled expanded state</td><td><code>boolean</code></td><td>—</td></tr>
            <tr><td><code>defaultExpanded</code></td><td>Uncontrolled default</td><td><code>boolean</code></td><td><code>true</code></td></tr>
            <tr><td><code>onExpandedChange</code></td><td>Toggle callback</td><td><code>(v: boolean) =&gt; void</code></td><td>—</td></tr>
            <tr><td><code>header</code></td><td>Custom header slot</td><td><code>ReactNode</code></td><td>—</td></tr>
            <tr><td><code>footer</code></td><td>Footer items</td><td><code>ReactNode</code></td><td>—</td></tr>
            <tr><td><code>children</code></td><td>Body items</td><td><code>ReactNode</code></td><td>—</td></tr>
          </tbody>
        </table>

        <h2 className="docs-section-title text-h3">API — SidebarItem</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>label</code></td><td>Item text</td><td><code>string</code></td><td>—</td></tr>
            <tr><td><code>icon</code></td><td>Leading icon</td><td><code>ReactNode</code></td><td>—</td></tr>
            <tr><td><code>selected</code></td><td>Active/selected state</td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>theme</code></td><td>Selected color theme</td><td><code>"neutral" | "accent"</code></td><td><code>"neutral"</code></td></tr>
            <tr><td><code>level</code></td><td>Indent level</td><td><code>"master" | "child"</code></td><td><code>"master"</code></td></tr>
            <tr><td><code>counter</code></td><td>Badge counter value</td><td><code>number | string</code></td><td>—</td></tr>
            <tr><td><code>dropdown</code></td><td>Show trailing chevron</td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>dropdownOpen</code></td><td>Rotate chevron</td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>disabled</code></td><td>Disable interaction</td><td><code>boolean</code></td><td><code>false</code></td></tr>
          </tbody>
        </table>

      </div>
    </>
  );
}
