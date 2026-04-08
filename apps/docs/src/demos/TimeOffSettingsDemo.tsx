import { useState } from 'react';
import {
  Sidebar,
  SidebarItem,
  Avatar,
  Button,
  Search,
  TabItem,
  TabGroup,
  Breadcrumb,
  BreadcrumbItem,
  Toggle,
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
  ChevronDown,
  ChevronRight01,
  Plus,
  Edit01,
  Trash,
  Send01,
} from '@zen/icons/line';
import styles from './TimeOffSettingsDemo.module.css';

/* ── Data ── */

interface LeaveType {
  id: number;
  emoji: string;
  name: string;
  daysOff: number;
  active: boolean;
}

interface HolidayCalendar {
  id: number;
  flag: string;
  country: string;
  daysOff: number;
  active: boolean;
}

const initialLeaveTypes: LeaveType[] = [
  { id: 1, emoji: '🏖️', name: 'Annual Leave',  daysOff: 15, active: true },
  { id: 2, emoji: '🤧', name: 'Sick Leave',    daysOff: 12, active: true },
  { id: 3, emoji: '🤷', name: 'Annual Leave',  daysOff: 5,  active: true },
];

const initialCalendars: HolidayCalendar[] = [
  { id: 1, flag: '🇻🇳', country: 'Vietnam', daysOff: 15, active: true },
  { id: 2, flag: '🇩🇪', country: 'Germany', daysOff: 15, active: false },
];

/* ── Section header ── */

function SectionLabel({ label }: { label: string }) {
  return <p className={styles.sectionLabel}>{label}</p>;
}

/* ── Notification bell ── */

function BellWithBadge() {
  return (
    <div className={styles.bellWrapper}>
      <Button variant="tertiary" size="m" icon={<Bell01 size={20} />} />
      <span className={styles.bellDot}>8</span>
    </div>
  );
}

/* ── Main ── */

export function TimeOffSettingsDemo() {
  const [navItem, setNavItem]   = useState('timeoff');
  const [activeTab, setActiveTab] = useState('configurations');
  const [leaveTypes, setLeaveTypes] = useState(initialLeaveTypes);
  const [calendars, setCalendars]   = useState(initialCalendars);

  const toggleLeave = (id: number) =>
    setLeaveTypes(prev => prev.map(l => l.id === id ? { ...l, active: !l.active } : l));

  const toggleCalendar = (id: number) =>
    setCalendars(prev => prev.map(c => c.id === id ? { ...c, active: !c.active } : c));

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
                <span className={styles.workspaceTitle}>Đìzai Studio</span>
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
              <SidebarItem label="Zen Apps"  icon={<Briefcase size={20} />}  selected={navItem === 'zenapps'}  onClick={() => setNavItem('zenapps')} />
              <SidebarItem label="Support"   icon={<HelpCircle size={20} />} selected={navItem === 'support'}  onClick={() => setNavItem('support')} />
            </div>
          }
        >
          <div className={styles.navContent}>
            <SectionLabel label="General" />
            <SidebarItem label="Home"       icon={<Home01 size={20} />}     selected={navItem === 'home'}     onClick={() => setNavItem('home')} />
            <SidebarItem label="My Profile" icon={<UserCircle size={20} />} selected={navItem === 'profile'}  onClick={() => setNavItem('profile')} />
            <SidebarItem label="Inbox"      icon={<Mail01 size={20} />}     selected={navItem === 'inbox'}    onClick={() => setNavItem('inbox')} />

            <SectionLabel label="Apps" />
            <SidebarItem label="Employees"          icon={<Users size={20} />}      selected={navItem === 'employees'} onClick={() => setNavItem('employees')} />
            <SidebarItem label="Documents"          icon={<FileDoc size={20} />}    selected={navItem === 'documents'} onClick={() => setNavItem('documents')} />
            <SidebarItem label="Project Management" icon={<Briefcase size={20} />}  selected={navItem === 'projects'}  onClick={() => setNavItem('projects')} />
            <SidebarItem label="Expenses"           icon={<Coins size={20} />}      selected={navItem === 'expenses'}  onClick={() => setNavItem('expenses')} />
            <SidebarItem label="Time off"           icon={<Calendar size={20} />}   selected={navItem === 'timeoff'}   onClick={() => setNavItem('timeoff')} />
            <SidebarItem label="Workflow"           icon={<Dataflow01 size={20} />} selected={navItem === 'workflow'}  onClick={() => setNavItem('workflow')} />
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
              <BreadcrumbItem href="#">Time off</BreadcrumbItem>
              <BreadcrumbItem>Settings</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className={styles.topBarCenter}>
            <Search placeholder="Search" size="default" style={{ width: 240 }} />
            <span className={styles.searchShortcut}>⌘ F</span>
          </div>
          <div className={styles.topBarRight}>
            <BellWithBadge />
            <Avatar size="m" src="https://i.pravatar.cc/150?img=47" />
          </div>
        </div>

        {/* ── Page header ── */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Settings</h1>
        </div>

        {/* ── Tabs ── */}
        <div className={styles.tabsRow}>
          <TabGroup tabStyle="indicator">
            <TabItem label="Configurations"  tabStyle="indicator" selected={activeTab === 'configurations'}  onClick={() => setActiveTab('configurations')} />
            <TabItem label="App Permissions" tabStyle="indicator" selected={activeTab === 'app-permissions'} onClick={() => setActiveTab('app-permissions')} />
          </TabGroup>
        </div>

        {/* ── Body ── */}
        <div className={styles.body}>

          {/* Leave Types */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Leave Types</h2>
              <Button variant="tertiary" size="m" icon={<Plus size={18} />}>Add</Button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeadRow}>
                    <th className={styles.thType}>TYPE</th>
                    <th className={styles.thDays}>DAY OFF</th>
                    <th className={styles.thActive}>ACTIVE</th>
                    <th className={styles.thAction} />
                  </tr>
                </thead>
                <tbody>
                  {leaveTypes.map(item => (
                    <tr key={item.id} className={styles.tableRow}>
                      <td className={styles.tdType}>
                        <span className={styles.typeCell}>
                          <span className={styles.rowEmoji}>{item.emoji}</span>
                          <span className={styles.typeName}>{item.name}</span>
                        </span>
                      </td>
                      <td className={styles.tdDays}>{item.daysOff} days</td>
                      <td className={styles.tdActive}>
                        <Toggle
                          size="medium"
                          checked={item.active}
                          onChange={() => toggleLeave(item.id)}
                        />
                      </td>
                      <td className={styles.tdAction}>
                        <button className={styles.iconBtn} aria-label="Edit">
                          <Edit01 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Public Holiday Calendars */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Public Holiday Calendars</h2>
              <Button variant="tertiary" size="m" icon={<Plus size={18} />}>Add</Button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeadRow}>
                    <th className={styles.thType}>TYPE</th>
                    <th className={styles.thDays}>DAY OFF</th>
                    <th className={styles.thActive}>ACTIVE</th>
                    <th className={styles.thAction} />
                  </tr>
                </thead>
                <tbody>
                  {calendars.map(item => (
                    <tr key={item.id} className={styles.tableRow}>
                      <td className={styles.tdType}>
                        <span className={styles.typeCell}>
                          <span className={styles.rowEmoji}>{item.flag}</span>
                          <span className={styles.typeName}>{item.country}</span>
                        </span>
                      </td>
                      <td className={styles.tdDays}>{item.daysOff} days</td>
                      <td className={styles.tdActive}>
                        <Toggle
                          size="medium"
                          checked={item.active}
                          onChange={() => toggleCalendar(item.id)}
                        />
                      </td>
                      <td className={styles.tdAction}>
                        <button
                          className={[styles.iconBtn, !item.active ? styles.iconBtnDisabled : ''].filter(Boolean).join(' ')}
                          aria-label="Delete"
                        >
                          <Trash size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>

      {/* ══ FLOATING ACTION ══ */}
      <button className={styles.fab} aria-label="Quick action">
        <Send01 size={20} />
      </button>
    </div>
  );
}
