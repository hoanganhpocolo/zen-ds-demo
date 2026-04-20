import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sidebar, SidebarItem, PopoverItem } from '@zen/components';
import type { WorkspaceItem } from '@zen/components';
import {
  Home03, BarChart01, Users, Settings01, Bell01,
  ShoppingCart, Calendar, Mail01, Globe01,
  Activity, FileDoc, Lock01, BookOpen, FileSearch,
  LineChartUp, PieChart01, HeartHand, Clock, Briefcase,
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
  const navigate = useNavigate();
  const location = useLocation();
  const parts = location.pathname.replace(/^\//, '').split('/');
  const ws = parts[0] || 'home';
  const page = parts[1] || 'dashboard';

  const setPage = (p: string) => navigate(`/${ws}/${p}`);
  const setWs = (w: string) => navigate(`/${w}/dashboard`);
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
      id: 'home',
      label: 'Home',
      icon: dockIcon('home'),
      children: (
        <>
          <SidebarItem icon={<Home03 size={20} />} label="Dashboard" selected={page === 'dashboard'} onClick={() => setPage('dashboard')} />
          <SidebarItem icon={<BarChart01 size={20} />} label="Overview" selected={page === 'overview'} onClick={() => setPage('overview')} />
          <SidebarItem icon={<Users size={20} />} label="Team" counter={128} selected={page === 'team'} onClick={() => setPage('team')} />
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
      id: 'docs',
      label: 'Docs',
      icon: dockIcon('docs'),
      children: (
        <>
          <SidebarItem icon={<BookOpen size={20} />} label="Guides" selected={page === 'guides'} onClick={() => setPage('guides')} />
          <SidebarItem icon={<FileDoc size={20} />} label="API Reference" selected={page === 'api'} onClick={() => setPage('api')} />
          <SidebarItem icon={<FileSearch size={20} />} label="Search Docs" selected={page === 'search'} onClick={() => setPage('search')} />
          <SidebarItem icon={<Activity size={20} />} label="Changelog" selected={page === 'changelog'} onClick={() => setPage('changelog')} />
        </>
      ),
      footer: (
        <SidebarItem icon={<Settings01 size={20} />} label="Docs Settings" />
      ),
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: dockIcon('analytics'),
      children: (
        <>
          <SidebarItem icon={<LineChartUp size={20} />} label="Performance" selected={page === 'performance'} onClick={() => setPage('performance')} />
          <SidebarItem icon={<PieChart01 size={20} />} label="Segments" selected={page === 'segments'} onClick={() => setPage('segments')} />
          <SidebarItem icon={<BarChart01 size={20} />} label="Reports" selected={page === 'reports'} onClick={() => setPage('reports')} />
          <SidebarItem icon={<Globe01 size={20} />} label="Funnels" selected={page === 'funnels'} onClick={() => setPage('funnels')} />
        </>
      ),
    },
    {
      id: 'hra',
      label: 'HRA',
      icon: dockIcon('hra'),
      children: (
        <>
          <SidebarItem icon={<Users size={20} />} label="Employees" selected={page === 'employees'} onClick={() => setPage('employees')} />
          <SidebarItem icon={<Briefcase size={20} />} label="Recruitment" selected={page === 'recruitment'} onClick={() => setPage('recruitment')} />
          <SidebarItem icon={<Clock size={20} />} label="Time Off" selected={page === 'timeoff'} onClick={() => setPage('timeoff')} />
          <SidebarItem icon={<HeartHand size={20} />} label="Benefits" selected={page === 'benefits'} onClick={() => setPage('benefits')} />
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
          onWorkspaceChange={(id) => setWs(id)}
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
              onWorkspaceChange={(id) => setWs(id)}
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
