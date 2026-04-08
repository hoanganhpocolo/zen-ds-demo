import { useState } from 'react';
import {
  Sidebar,
  SidebarItem,
  Avatar,
  Badge,
  Button,
  Search,
  TabItem,
  TabGroup,
  MetricCard,
  Breadcrumb,
  BreadcrumbItem,
} from '@zen/components';
import {
  Home01,
  UserCircle,
  Mail01,
  Users,
  FileDoc,
  Briefcase,
  Coins,
  Calendar,
  Dataflow01,
  Settings01,
  HelpCircle,
  Bell01,
  Download01,
  Send01,
  ChevronDown,
  ChevronRight01,
  ArrowNarrowUp,
  Plus,
} from '@zen/icons/line';
import styles from './TimeOffDemo.module.css';

/* ── Data ── */

type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';

interface LeaveRequest {
  id: number;
  type: string;
  emoji: string;
  submittedOn: string;
  from: string;
  to: string;
  total: string;
  status: LeaveStatus;
}

const requests: LeaveRequest[] = [
  { id: 1, type: 'Annual Leave', emoji: '🏖️', submittedOn: 'Mar 1, 2026', from: 'Mar 11, 2026', to: 'Mar 12, 2026', total: '2 days', status: 'Pending' },
  { id: 2, type: 'Sick Leave', emoji: '🤧', submittedOn: 'Feb 27, 2026', from: 'Mar 11, 2026', to: 'Mar 12, 2026', total: '2 days', status: 'Approved' },
  { id: 3, type: 'Annual Leave', emoji: '🏖️', submittedOn: 'Feb 17, 2026', from: 'Mar 11, 2026', to: 'Mar 12, 2026', total: '2 days', status: 'Rejected' },
  { id: 4, type: 'Annual Leave', emoji: '🏖️', submittedOn: 'Jan 29, 2026', from: 'Mar 11, 2026', to: 'Mar 12, 2026', total: '2 days', status: 'Approved' },
  { id: 5, type: 'Annual Leave', emoji: '🏖️', submittedOn: 'Jan 12, 2026', from: 'Mar 11, 2026', to: 'Mar 12, 2026', total: '2 days', status: 'Approved' },
  { id: 6, type: 'Annual Leave', emoji: '🏖️', submittedOn: 'Dec 24, 2025', from: 'Mar 11, 2026', to: 'Mar 12, 2026', total: '2 days', status: 'Approved' },
];

/* ── Status badge ── */

function StatusBadge({ status }: { status: LeaveStatus }) {
  const colorMap = {
    Pending: 'warning',
    Approved: 'positive',
    Rejected: 'negative',
  } as const;
  return <Badge label={status} color={colorMap[status]} variant="subtle" size="m" dot />;
}

/* ── Notification bell ── */

function BellWithBadge() {
  return (
    <div className={styles.bellWrapper}>
      <Button variant="tertiary" size="m" icon={<Bell01 size={20} />} />
      <span className={`text-small-label ${styles.bellDot}`}>8</span>
    </div>
  );
}

/* ── Sidebar section label ── */

function SectionLabel({ label }: { label: string }) {
  return <p className={styles.sectionLabel}>{label}</p>;
}

/* ── Main ── */

export function TimeOffDemo() {
  const [navItem, setNavItem] = useState('timeoff');
  const [activeTab, setActiveTab] = useState('my-leaves');

  return (
    <div className={styles.root}>

      {/* ══ WORKSPACE STRIP ══ */}
      <div className={styles.workspaceStrip}>
        <div className={styles.workspaceLogo}>
          <img
            className={styles.zenMark}
            src="https://www.figma.com/api/mcp/asset/4a92821a-76d5-4a33-ae19-32fb73575ded"
            width={28}
            height={28}
            alt="Zen"
          />
        </div>
        <div className={styles.workspaceAvatars}>
          <span className={styles.workspaceActive}>
            <Avatar size="m" color="brown" background="solid" shape="square">Đ</Avatar>
          </span>
          <Avatar size="m" color="indigo" background="solid" shape="square">B</Avatar>
        </div>
        <div className={styles.workspaceAdd}>
          <Button variant="tertiary" size="m" icon={<Plus size={20} />} />
        </div>
      </div>

      {/* ══ SIDEBAR ══ */}
      <div className={styles.sidebarOuter}>
        <Sidebar
          background="default"
          header={
            <div className={styles.sidebarHeader}>
              <button className={styles.workspaceBtn}>
                <Avatar size="xs" color="brown" background="solid" shape="square">D</Avatar>
                <span className={`text-body-base-primary ${styles.workspaceTitle}`}>Đìzai Studio</span>
                <span className={styles.workspaceChevron}><ChevronDown size={14} /></span>
              </button>
              <button className={styles.settingsBtn} aria-label="Settings">
                <Settings01 size={20} />
              </button>
            </div>
          }
          footer={
            <div className={styles.sidebarFooter}>
              <SidebarItem label="Workspace" icon={<Settings01 size={20} />} selected={navItem === 'workspace'} onClick={() => setNavItem('workspace')} />
              <SidebarItem label="Zen Apps" icon={<Briefcase size={20} />} selected={navItem === 'zenapps'} onClick={() => setNavItem('zenapps')} />
              <SidebarItem label="Support" icon={<HelpCircle size={20} />} selected={navItem === 'support'} onClick={() => setNavItem('support')} />
            </div>
          }
        >
          <div className={styles.navContent}>
            {/* General */}
            <SectionLabel label="General" />
            <SidebarItem label="Home" icon={<Home01 size={20} />} selected={navItem === 'home'} onClick={() => setNavItem('home')} />
            <SidebarItem label="My Profile" icon={<UserCircle size={20} />} selected={navItem === 'profile'} onClick={() => setNavItem('profile')} />
            <SidebarItem label="Inbox" icon={<Mail01 size={20} />} selected={navItem === 'inbox'} onClick={() => setNavItem('inbox')} />

            {/* Apps */}
            <SectionLabel label="Apps" />
            <SidebarItem label="Employees" icon={<Users size={20} />} selected={navItem === 'employees'} onClick={() => setNavItem('employees')} />
            <SidebarItem label="Documents" icon={<FileDoc size={20} />} selected={navItem === 'documents'} onClick={() => setNavItem('documents')} />
            <SidebarItem label="Project Management" icon={<Briefcase size={20} />} selected={navItem === 'projects'} onClick={() => setNavItem('projects')} />
            <SidebarItem label="Expenses" icon={<Coins size={20} />} selected={navItem === 'expenses'} onClick={() => setNavItem('expenses')} />
            <SidebarItem label="Time off" icon={<Calendar size={20} />} selected={navItem === 'timeoff'} onClick={() => setNavItem('timeoff')} />
            <SidebarItem label="Workflow" icon={<Dataflow01 size={20} />} selected={navItem === 'workflow'} onClick={() => setNavItem('workflow')} />
          </div>
        </Sidebar>
      </div>

      {/* ══ MAIN ══ */}
      <div className={styles.main}>

        {/* ── Top bar ── */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <Breadcrumb>
              <BreadcrumbItem master href="#">Home</BreadcrumbItem>
              <BreadcrumbItem>Time off</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className={styles.topBarCenter}>
            <Search placeholder="Search" size="default" style={{ width: 240 }} />
            <span className={`text-caption ${styles.searchShortcut}`}>⌘ F</span>
          </div>
          <div className={styles.topBarRight}>
            <BellWithBadge />
            <Avatar size="m" src="https://i.pravatar.cc/150?img=47" />
          </div>
        </div>

        {/* ── Page header ── */}
        <div className={styles.pageHeader}>
          <h1 className={`text-h4 ${styles.pageTitle}`}>Time off</h1>
          <div className={styles.pageActions}>
            <Button variant="tertiary" size="m" icon={<Settings01 size={18} />}>Settings</Button>
            <Button variant="primary" size="m" icon={<Send01 size={18} />}>Submit Leave</Button>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className={styles.tabsRow}>
          <TabGroup tabStyle="indicator">
            <TabItem label="My Leaves" tabStyle="indicator" selected={activeTab === 'my-leaves'} onClick={() => setActiveTab('my-leaves')} />
            <TabItem label="Team Leaves" tabStyle="indicator" selected={activeTab === 'team-leaves'} onClick={() => setActiveTab('team-leaves')} />
            <TabItem label="Calendar" tabStyle="indicator" selected={activeTab === 'calendar'} onClick={() => setActiveTab('calendar')} />
          </TabGroup>
        </div>

        {/* ── Body ── */}
        <div className={styles.body}>

          {/* Metric cards */}
          <div className={styles.metricsRow}>
            <MetricCard
              icon={<span className={styles.leaveEmoji}>🏖️</span>}
              metricTitle="Annual Leave"
              value="15"
              iconBackground={false}
              showAction
              className={styles.metricCard}
            />
            <MetricCard
              icon={<span className={styles.leaveEmoji}>🤧</span>}
              metricTitle="Sick Leave"
              value="12"
              iconBackground={false}
              showAction
              className={styles.metricCard}
            />
            <MetricCard
              icon={<span className={styles.leaveEmoji}>🔥</span>}
              metricTitle="Unpaid Leave"
              value="5"
              iconBackground={false}
              showAction
              className={styles.metricCard}
            />
          </div>

          {/* Requests section */}
          <div className={styles.requestsSection}>
            <div className={styles.requestsHeader}>
              <h2 className={`text-h4 ${styles.requestsTitle}`}>Requests</h2>
              <Button variant="tertiary" size="m" icon={<Download01 size={18} />}>Export Report</Button>
            </div>

            {/* Table */}
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeadRow}>
                    <th className={styles.thType}>TYPE</th>
                    <th className={styles.thSubmit}>
                      <span className={styles.thWithIcon}>
                        <ArrowNarrowUp size={14} />
                        SUBMIT ON
                      </span>
                    </th>
                    <th className={styles.thRange}>FROM - TO</th>
                    <th className={styles.thTotal}>TOTAL</th>
                    <th className={styles.thStatus}>STATUS</th>
                    <th className={styles.thAction} />
                  </tr>
                </thead>
                <tbody>
                  {requests.map(req => (
                    <tr key={req.id} className={styles.tableRow}>
                      <td className={styles.tdType}>
                        <span className={styles.leaveTypeCell}>
                          <span className={styles.rowEmoji}>{req.emoji}</span>
                          <span className={`text-body-small ${styles.leaveTypeName}`}>{req.type}</span>
                        </span>
                      </td>
                      <td className={`text-body-small ${styles.tdCell}`}>{req.submittedOn}</td>
                      <td className={`text-body-small ${styles.tdCell}`}>{req.from} – {req.to}</td>
                      <td className={`text-body-small ${styles.tdBold}`}>{req.total}</td>
                      <td className={`text-body-small ${styles.tdCell}`}>
                        <StatusBadge status={req.status} />
                      </td>
                      <td className={`text-body-small ${styles.tdAction}`}>
                        <ChevronRight01 size={18} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ══ FLOATING ACTION ══ */}
      <button className={styles.fab} aria-label="Quick action">
        <Send01 size={20} />
      </button>
    </div>
  );
}
