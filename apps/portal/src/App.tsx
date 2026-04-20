import { useState, useCallback, useMemo, type ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sidebar, SidebarItem, PopoverItem, Modal, InputField } from '@zen/components';
import type { WorkspaceItem } from '@zen/components';
import {
  Home03, BarChart01, Users, Settings01, Bell01,
  ShoppingCart, Calendar, Mail01, Globe01,
  Activity, FileDoc, Lock01, BookOpen, FileSearch,
  LineChartUp, PieChart01, HeartHand, Clock, Briefcase,
  SearchMedium,
} from '@zen/icons/line';
import { APP_REGISTRY, getApp } from './app-registry';
import { AppIcon } from './AppIcon';
import { useDarkMode } from './useDarkMode';
import { HomePage } from './pages/HomePage';
import { CentralizedDashboardPage } from './pages/CentralizedDashboardPage';
import { NexusDocsDetailPage } from './pages/NexusDocsDetailPage';
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

/* ── Per-workspace sidebar content (children + footer) ── */
function buildWorkspaceContent(
  appId: string,
  page: string,
  setPage: (p: string) => void,
): { children: ReactNode; footer?: ReactNode } {
  const sel = (p: string) => page === p;
  const go = (p: string) => () => setPage(p);

  switch (appId) {
    case 'home':
      return {
        children: (
          <>
            <SidebarItem icon={<Home03 size={20} />} label="Dashboard" selected={sel('dashboard')} onClick={go('dashboard')} />
            <SidebarItem icon={<BarChart01 size={20} />} label="Overview" selected={sel('overview')} onClick={go('overview')} />
            <SidebarItem icon={<Users size={20} />} label="Team" counter={128} selected={sel('team')} onClick={go('team')} />
            <SidebarItem icon={<Mail01 size={20} />} label="Messages" counter={3} selected={sel('messages')} onClick={go('messages')} />
            <SidebarItem icon={<Calendar size={20} />} label="Calendar" selected={sel('calendar')} onClick={go('calendar')} />
            <SidebarItem icon={<ShoppingCart size={20} />} label="Orders" selected={sel('orders')} onClick={go('orders')} />
            <SidebarItem icon={<Globe01 size={20} />} label="Website" selected={sel('website')} onClick={go('website')} />
          </>
        ),
        footer: (
          <>
            <SidebarItem icon={<Settings01 size={20} />} label="Settings" selected={sel('settings')} onClick={go('settings')} />
            <SidebarItem icon={<Bell01 size={20} />} label="Notifications" counter={5} />
          </>
        ),
      };
    case 'docs':
      return {
        children: (
          <>
            <SidebarItem icon={<BookOpen size={20} />} label="Guides" selected={sel('guides')} onClick={go('guides')} />
            <SidebarItem icon={<FileDoc size={20} />} label="API Reference" selected={sel('api')} onClick={go('api')} />
            <SidebarItem icon={<FileSearch size={20} />} label="Search Docs" selected={sel('search')} onClick={go('search')} />
            <SidebarItem icon={<Activity size={20} />} label="Changelog" selected={sel('changelog')} onClick={go('changelog')} />
          </>
        ),
        footer: <SidebarItem icon={<Settings01 size={20} />} label="Docs Settings" />,
      };
    case 'analytics':
      return {
        children: (
          <>
            <SidebarItem icon={<LineChartUp size={20} />} label="Performance" selected={sel('performance')} onClick={go('performance')} />
            <SidebarItem icon={<PieChart01 size={20} />} label="Segments" selected={sel('segments')} onClick={go('segments')} />
            <SidebarItem icon={<BarChart01 size={20} />} label="Reports" selected={sel('reports')} onClick={go('reports')} />
            <SidebarItem icon={<Globe01 size={20} />} label="Funnels" selected={sel('funnels')} onClick={go('funnels')} />
          </>
        ),
      };
    case 'hra':
      return {
        children: (
          <>
            <SidebarItem icon={<Users size={20} />} label="Employees" selected={sel('employees')} onClick={go('employees')} />
            <SidebarItem icon={<Briefcase size={20} />} label="Recruitment" selected={sel('recruitment')} onClick={go('recruitment')} />
            <SidebarItem icon={<Clock size={20} />} label="Time Off" selected={sel('timeoff')} onClick={go('timeoff')} />
            <SidebarItem icon={<HeartHand size={20} />} label="Benefits" selected={sel('benefits')} onClick={go('benefits')} />
            <SidebarItem icon={<Lock01 size={20} />} label="Permissions" selected={sel('permissions')} onClick={go('permissions')} />
          </>
        ),
      };
    case 'centralized':
      return {
        children: (
          <>
            <SidebarItem icon={<BarChart01 size={20} />} label="Dashboard" selected={sel('centralized-dashboard')} onClick={go('centralized-dashboard')} />
            <SidebarItem icon={<FileDoc size={20} />} label="Docs" selected={sel('docs')} onClick={go('docs')} />
          </>
        ),
      };
    default:
      return {
        children: (
          <>
            <SidebarItem icon={<Home03 size={20} />} label="Dashboard" selected={sel('dashboard')} onClick={go('dashboard')} />
            <SidebarItem icon={<Activity size={20} />} label="Activity" selected={sel('activity')} onClick={go('activity')} />
            <SidebarItem icon={<Mail01 size={20} />} label="Messages" selected={sel('messages')} onClick={go('messages')} />
            <SidebarItem icon={<Lock01 size={20} />} label="Permissions" selected={sel('permissions')} onClick={go('permissions')} />
          </>
        ),
        footer: <SidebarItem icon={<Settings01 size={20} />} label="Settings" selected={sel('settings')} onClick={go('settings')} />,
      };
  }
}

const DEFAULT_DOCK_IDS = ['home', 'docs', 'analytics', 'hra', 'centralized'];
const DOCK_STORAGE_KEY = 'portal-dock-ids-v1';

function loadDockIds(): string[] {
  try {
    const raw = localStorage.getItem(DOCK_STORAGE_KEY);
    if (!raw) return DEFAULT_DOCK_IDS;
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr) || arr.length === 0) return DEFAULT_DOCK_IDS;
    return arr.filter((id): id is string => typeof id === 'string' && !!getApp(id));
  } catch {
    return DEFAULT_DOCK_IDS;
  }
}

export function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const parts = location.pathname.replace(/^\//, '').split('/');
  const ws = parts[0] || 'home';
  const page = parts[1] || 'dashboard';

  const setPage = useCallback((p: string) => navigate(`/${ws}/${p}`), [navigate, ws]);
  const setWs = useCallback((w: string) => navigate(`/${w}/dashboard`), [navigate]);

  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [mobileSidebarClosing, setMobileSidebarClosing] = useState(false);
  const [dockIds, setDockIds] = useState<string[]>(loadDockIds);
  const [addWsOpen, setAddWsOpen] = useState(false);
  const [addWsSearch, setAddWsSearch] = useState('');

  const persistDockIds = useCallback((next: string[]) => {
    setDockIds(next);
    try { localStorage.setItem(DOCK_STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  }, []);

  const closeMobileSidebar = useCallback(() => {
    setMobileSidebarClosing(true);
    setTimeout(() => {
      setMobileSidebar(false);
      setMobileSidebarClosing(false);
    }, 250);
  }, []);

  const workspaces: WorkspaceItem[] = useMemo(() => {
    return dockIds
      .map<WorkspaceItem | null>((id) => {
        const app = getApp(id);
        if (!app) return null;
        const content = buildWorkspaceContent(id, page, setPage);
        return {
          id,
          label: app.name,
          icon: dockIcon(id),
          children: content.children,
          footer: content.footer,
        };
      })
      .filter((w): w is WorkspaceItem => w !== null);
  }, [dockIds, page, setPage]);

  const activeWs = workspaces.find((w) => w.id === ws);

  /* ── Add workspace flow ── */
  const availableApps = useMemo(() => {
    const q = addWsSearch.trim().toLowerCase();
    return APP_REGISTRY.filter((a) => {
      if (dockIds.includes(a.id)) return false;
      if (!q) return true;
      return a.name.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q);
    });
  }, [dockIds, addWsSearch]);

  const openAddWs = useCallback(() => {
    setAddWsSearch('');
    setAddWsOpen(true);
  }, []);

  const closeAddWs = useCallback(() => {
    setAddWsOpen(false);
    setAddWsSearch('');
  }, []);

  const handleAddWs = useCallback((id: string) => {
    if (dockIds.includes(id)) { closeAddWs(); return; }
    persistDockIds([...dockIds, id]);
    closeAddWs();
  }, [dockIds, persistDockIds, closeAddWs]);

  const handleRemoveWs = useCallback(() => {
    if (dockIds.length <= 1) return;
    const next = dockIds.filter((id) => id !== ws);
    persistDockIds(next);
    setWs(next[0]);
  }, [dockIds, ws, persistDockIds, setWs]);

  const canRemoveWs = dockIds.length > 1;

  const dropdown = (
    <div className="portal-ws-dropdown">
      <PopoverItem label="Workspace Settings" noCheck />
      <PopoverItem label="Invite Members" noCheck />
      <PopoverItem label="Manage Workspaces" noCheck />
      <PopoverItem
        label="Remove Workspace"
        noCheck
        disabled={!canRemoveWs}
        onClick={handleRemoveWs}
        className="portal-ws-dropdown-danger"
      />
    </div>
  );

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
          onAddWorkspace={openAddWs}
          dockHeader={<DockLogo />}
          workspaceDropdown={dropdown}
        />
      </div>

      <main className="portal-main">
        <div className="portal-content">
          {ws === 'centralized' && page === 'centralized-dashboard' && <CentralizedDashboardPage onMenuClick={() => setMobileSidebar(true)} />}
          {ws === 'centralized' && page === 'docs' && <CentralizedDashboardPage onMenuClick={() => setMobileSidebar(true)} variant="docs" />}
          {ws === 'centralized' && page === 'nexus-docs' && <NexusDocsDetailPage onMenuClick={() => setMobileSidebar(true)} />}
          {ws !== 'centralized' && page === 'dashboard' && <HomePage onMenuClick={() => setMobileSidebar(true)} />}
          {ws !== 'centralized' && page !== 'dashboard' && (
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
          <div className={`portal-mobile-sidebar ${mobileSidebarClosing ? 'portal-mobile-sidebar-closing' : ''}`} onClick={(e) => e.stopPropagation()}>
            <Sidebar
              variant="dock"
              expanded={true}
              workspaces={workspaces}
              activeWorkspace={ws}
              onWorkspaceChange={(id) => setWs(id)}
              onAddWorkspace={openAddWs}
              dockHeader={<DockLogo />}
              closeButton
              onClose={closeMobileSidebar}
              workspaceDropdown={dropdown}
            />
          </div>
        </div>
      )}

      {/* Add Workspace Modal */}
      <Modal
        open={addWsOpen}
        layout="basic"
        title="Add Workspace"
        secondaryLabel="Cancel"
        primaryLabel="Done"
        onPrimary={closeAddWs}
        onSecondary={closeAddWs}
        onClose={closeAddWs}
      >
        <div className="portal-add-ws-body">
          <InputField
            size="m"
            placeholder="Search tools..."
            value={addWsSearch}
            onChange={(e) => setAddWsSearch(e.target.value)}
            leading={<SearchMedium size={20} />}
          />
          {availableApps.length === 0 ? (
            <div className="portal-add-ws-empty">
              <p className="text-body-base portal-empty-text">
                {addWsSearch ? 'No tools match your search.' : 'All tools are already in your dock.'}
              </p>
            </div>
          ) : (
            <div className="portal-add-ws-list">
              {availableApps.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  className="portal-add-ws-item"
                  onClick={() => handleAddWs(app.id)}
                >
                  <AppIcon icon={app.icon} semantic={app.semantic} size="lg" />
                  <div className="portal-add-ws-info">
                    <span className="text-body-base wc-bold">{app.name}</span>
                    <span className="text-body-small wc-tertiary-text">{app.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
