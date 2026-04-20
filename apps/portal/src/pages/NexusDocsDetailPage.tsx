import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Avatar, SidebarItem, SelectField, Breadcrumb, BreadcrumbItem, Badge, Button } from '@zen/components';
import { Bell01, Sun, Moon01, Menu01, ChevronDown } from '@zen/icons/line';
import { useDarkMode } from '../useDarkMode';
import './NexusDocsDetailPage.css';
import './HomePage.css';

/* ── Tenant Cards (for dropdown) ── */
const tenantOptions = [
  { value: 'nexus-docs', label: 'Nexus Docs', leading: <img src="/nexus-logo.png" alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} /> },
  { value: 'fpa', label: 'Financial Planning', leading: <img src="/FPA-logo.png" alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} /> },
  { value: 'srm', label: 'Security Docs', leading: <img src="/SRM-logo.png" alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} /> },
  { value: 'legal', label: 'Legal Docs', leading: <img src="/legal-logo.png" alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} /> },
  { value: 'hr', label: 'Human Resources', leading: <img src="/HR-logo.png" alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} /> },
];

/* ── Menu Items ── */
const menuItems = [
  { id: 'gpp-timeline', label: '[0] GPP Product Timeline', hasDropdown: true },
  { id: 'gpp', label: '[1] GPP', hasDropdown: true, selected: true },
  { id: 'case-study', label: 'CASE STUDY', indent: true },
  { id: 'create', label: 'CREATE', indent: true },
  { id: 'data-platform', label: 'DATA PLATFORM', indent: true },
  { id: 'grow', label: 'GROW', indent: true },
  { id: 'home', label: 'HOME', hasDropdown: true, indent: true, children: [
    { id: 'release-note', label: 'Release note' },
    { id: 'change-mgmt', label: 'Change Management Process' },
  ]},
  { id: 'hrbp', label: '[2] HRBP', hasDropdown: true, children: [
    { id: 'hrbp-profile', label: 'HRBP Profile & Structure' },
    { id: 'hrbp-process', label: 'HRBP Core Processes' },
    { id: 'hrbp-tools', label: 'HRBP Tools & Systems' },
  ]},
  { id: 'fpa', label: '[3] FPA', hasDropdown: true, children: [
    { id: 'fpa-budget', label: 'Annual Budget Planning' },
    { id: 'fpa-forecast', label: 'Financial Forecast Models' },
    { id: 'fpa-report', label: 'FPA Reporting Templates' },
  ]},
  { id: 'legal', label: '[4] Legal', hasDropdown: true, children: [
    { id: 'legal-contracts', label: 'Contract Templates' },
    { id: 'legal-compliance', label: 'Compliance Guidelines' },
    { id: 'legal-policies', label: 'Legal Policies' },
  ]},
  { id: 'hra', label: '[5] HRA', hasDropdown: true, children: [
    { id: 'hra-policies', label: 'HRA Policies' },
    { id: 'hra-benefits', label: 'Benefits Overview' },
    { id: 'hra-procedures', label: 'HRA Procedures' },
  ]},
  { id: 'srm', label: '[6] SRM', hasDropdown: true, children: [
    { id: 'srm-risk', label: 'Risk Assessment' },
    { id: 'srm-controls', label: 'Security Controls' },
    { id: 'srm-audit', label: 'Audit Documentation' },
  ]},
];

/* ── TOC Items ── */
const tocItems = [
  { id: 'objective', label: '1. Objective' },
  { id: 'scope', label: '2. Scope' },
  { id: 'flowchart', label: '3. Flow Chart Symbols' },
  { id: 'definition', label: '4. Definition of Change Management' },
  { id: 'change-types', label: '5. Change Types' },
  { id: 'roles', label: '6. Roles and Responsibilities' },
];

/* ── Top Bar ── */
function getGreeting(): { text: string; icon: string } {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { text: 'Good morning', icon: '/Day.png' };
  if (hour >= 12 && hour < 17) return { text: 'Good afternoon', icon: '/Day.png' };
  if (hour >= 17 && hour < 21) return { text: 'Good evening', icon: '/Night.png' };
  return { text: 'Good night', icon: '/Night.png' };
}

function DocsHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  const { dark, toggle } = useDarkMode();
  const greeting = getGreeting();

  return (
    <div className="home-topbar">
      <div className="home-topbar-mobile-left">
        <Button variant="flat-primary" size="m" icon={<Menu01 size={20} />} onClick={onMenuClick} />
      </div>
      <div className="home-topbar-greeting">
        <img src={greeting.icon} alt="" width={65} height={65} />
        <h2 className="text-h4">{greeting.text}! Luna,</h2>
      </div>
      <div className="home-topbar-right">
        <div className="home-topbar-search">
          <Search size="default" placeholder="Search" />
        </div>
        <Button variant="flat-primary" size="m" icon={dark ? <Sun size={20} /> : <Moon01 size={20} />} onClick={toggle} />
        <Button variant="flat-primary" size="m" icon={<Bell01 size={20} />} />
        <div className="home-topbar-lang">
          <span className="text-body-small">VN</span>
          <ChevronDown size={16} />
        </div>
        <Avatar size="m" color="blue">N</Avatar>
      </div>
    </div>
  );
}

/* ── Nexus Docs Dropdown Selector ── */
function NexusDocsSelector() {
  const navigate = useNavigate();

  return (
    <div className="nexus-docs-menu-select">
      <SelectField
        placeholder="Select..."
        size="m"
        options={tenantOptions}
        defaultValue="nexus-docs"
        leading={<img src="/nexus-icon.png" alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />}
        onChange={(value) => {
          navigate(`/centralized/${value}`);
        }}
      />
    </div>
  );
}

/* ── Menu Sidebar ── */
function DocsMenuSidebar({ defaultSelected = 'home', defaultSelectedChild = 'change-mgmt' }: { defaultSelected?: string; defaultSelectedChild?: string }) {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({ home: true });
  const [selectedItem, setSelectedItem] = useState<string>(defaultSelected);
  const [selectedChild, setSelectedChild] = useState<string>(defaultSelectedChild);

  const toggleMenu = (id: string) => {
    setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="nexus-docs-menu">
      <NexusDocsSelector />
      <div className="nexus-docs-menu-list">
        {menuItems.map((item) => {
          const isChild = item.indent === true;
          const level = isChild ? 'child' : 'master';
          const isOpen = openMenus[item.id];
          const hasChildren = item.children && item.children.length > 0;

          return (
            <div key={item.id}>
              <SidebarItem
                label={item.label}
                level={level}
                theme="neutral"
                selected={selectedItem === item.id && !hasChildren}
                dropdown={hasChildren}
                dropdownOpen={isOpen}
                onClick={() => {
                  if (hasChildren) {
                    toggleMenu(item.id);
                  }
                  setSelectedItem(item.id);
                }}
                style={{ marginLeft: item.indentLevel === 2 ? 28 : item.indent ? 12 : 0 }}
              />
              {hasChildren && isOpen && (
                <div className="nexus-docs-menu-children">
                  {item.children!.map((child) => (
                    <SidebarItem
                      key={child.id}
                      label={child.label}
                      level="child"
                      theme="neutral"
                      selected={selectedChild === child.id}
                      onClick={() => {
                        setSelectedChild(child.id);
                        setSelectedItem(item.id);
                        if (child.id !== 'change-mgmt') {
                          navigate(`/centralized/${child.id}`);
                        }
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Table of Contents Sidebar ── */
function DocsTOC() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="nexus-docs-toc">
      <div className="nexus-docs-toc-title">Table of content</div>
      <div className="nexus-docs-toc-list">
        {tocItems.map((item) => (
          <div
            key={item.id}
            className="nexus-docs-toc-item"
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Breadcrumbs ── */
function DocsBreadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">GPP</BreadcrumbItem>
      <BreadcrumbItem href="#">HOME</BreadcrumbItem>
      <BreadcrumbItem>Change Management Process</BreadcrumbItem>
    </Breadcrumb>
  );
}

/* ── Main Page ── */
export function NexusDocsDetailPage({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="nexus-docs-page">
      <DocsHeader onMenuClick={onMenuClick} />
      <div className="nexus-docs-body">
        <DocsMenuSidebar defaultSelected="home" defaultSelectedChild="change-mgmt" />
        <article className="nexus-docs-article">
          <div className="nexus-docs-article-content">
            <div className="nexus-docs-hero">
              <img src="https://www.figma.com/api/mcp/asset/c6726eb1-d256-4966-a00f-c917b201e4d1" alt="" />
            </div>

            <div className="nexus-docs-article-top">
              <DocsBreadcrumbs />

              <h1 className="nexus-docs-title">Change management process</h1>

              <p className="nexus-docs-date">Last updated Jan 26 2026 8:30 by QuanNT3</p>

              <div className="nexus-docs-tags">
                <Badge label="#Compliant" color="neutral" variant="subtle" size="m" dot={false} />
                <Badge label="#Process&Policy" color="neutral" variant="subtle" size="m" dot={false} />
              </div>

              <div className="nexus-docs-meta">
                <div className="nexus-docs-meta-row">
                  <div className="nexus-docs-meta-item">
                    <span className="nexus-docs-meta-label">Version:</span>
                    <span className="nexus-docs-meta-value">1.0</span>
                  </div>
                  <span className="nexus-docs-meta-separator">|</span>
                  <div className="nexus-docs-meta-item">
                    <span className="nexus-docs-meta-label">Written by:</span>
                    <span className="nexus-docs-meta-value">MyLTH2, NyPH</span>
                  </div>
                  <span className="nexus-docs-meta-separator">|</span>
                  <div className="nexus-docs-meta-item">
                    <span className="nexus-docs-meta-label">Advisor:</span>
                    <span className="nexus-docs-meta-value">PRO, PEN, PIN, GIO, GDS</span>
                  </div>
                  <span className="nexus-docs-meta-separator">|</span>
                  <div className="nexus-docs-meta-item">
                    <span className="nexus-docs-meta-label">Review by:</span>
                    <span className="nexus-docs-meta-value">QuanNT3</span>
                  </div>
                  <span className="nexus-docs-meta-separator">|</span>
                  <div className="nexus-docs-meta-item">
                    <span className="nexus-docs-meta-label">Approved by:</span>
                    <span className="nexus-docs-meta-value">HawkinsP</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="nexus-docs-section" id="objective">
              <h2 className="nexus-docs-section-title">1. Objective</h2>
              <p className="text-body-base-tertiary">
                The change management process defines and implements change management of all information systems or data managed by VNGGames to ensure the management of change and mitigate the risk of unauthorized changes and negative impact to the information systems. This process establishes a standardized approach for requesting, evaluating, approving, implementing, and documenting changes to the technology infrastructure, applications, and data assets.
              </p>
            </div>

            <div className="nexus-docs-section" id="scope">
              <h2 className="nexus-docs-section-title">2. Scope</h2>
              <p className="text-body-base-tertiary">
                This process is applicable to all information systems of VNGGames and employees, third-party personnel, suppliers who manage them. This includes but is not limited to the Application, Operating System (OS), and Database (DB) layers. All changes to production environments, development systems, and any infrastructure components that could potentially impact business operations are subject to this process.
              </p>
            </div>

            <div className="nexus-docs-section" id="flowchart">
              <h2 className="nexus-docs-section-title">3. Flow Chart Symbols</h2>
              <p className="text-body-base-tertiary">
                The following symbols are used in the change management flow charts to represent different types of actions, decisions, and processes. Understanding these symbols is essential for interpreting the change management workflow correctly.
              </p>
              <div className="nexus-docs-flowchart-legend">
                <div className="nexus-docs-flowchart-item">
                  <div className="nexus-docs-flowchart-box nexus-docs-flowchart-box--process">Process</div>
                  <span className="text-body-base-tertiary">Represents a specific action or task to be performed</span>
                </div>
                <div className="nexus-docs-flowchart-item">
                  <div className="nexus-docs-flowchart-box nexus-docs-flowchart-box--decision">Decision</div>
                  <span className="text-body-base-tertiary">Represents a decision point with Yes/No outcomes</span>
                </div>
                <div className="nexus-docs-flowchart-item">
                  <div className="nexus-docs-flowchart-box nexus-docs-flowchart-box--start">Start/End</div>
                  <span className="text-body-base-tertiary">Represents the beginning or end of a process</span>
                </div>
                <div className="nexus-docs-flowchart-item">
                  <div className="nexus-docs-flowchart-box nexus-docs-flowchart-box--connector">Connector</div>
                  <span className="text-body-base-tertiary">Represents a connection to another part of the diagram</span>
                </div>
              </div>
            </div>

            <div className="nexus-docs-section" id="definition">
              <h2 className="nexus-docs-section-title">4. Definition of Change Management</h2>
              <p className="text-body-base-tertiary">
                Change management is the structured approach of transitioning an organization from a current state to a desired future state. In the context of VNGGames IT operations, change management ensures that changes to information systems are carefully controlled, documented, and implemented in a way that minimizes disruption to services while maintaining security and compliance standards.
              </p>
              <p className="text-body-base-tertiary">
                The key objectives of change management include: ensuring that changes are made in a controlled and coordinated manner; minimizing the risk of changes causing disruptions to services; maintaining proper documentation and audit trails; and continuously improving the change process based on metrics and feedback.
              </p>
            </div>

            <div className="nexus-docs-section" id="change-types">
              <h2 className="nexus-docs-section-title">5. Change Types</h2>
              <p className="text-body-base-tertiary">
                Changes are categorized into different types based on their impact, urgency, and complexity. Understanding the classification helps in determining the appropriate approval process and implementation timeline.
              </p>
              <div className="nexus-docs-change-types">
                <div className="nexus-docs-change-type">
                  <h3 className="nexus-docs-change-type-title">Standard Changes</h3>
                  <p className="text-body-base-tertiary">Low-risk changes that follow a predefined workflow and can be implemented without extensive approval. These are typically routine maintenance tasks, minor configuration updates, and standard operational procedures.</p>
                </div>
                <div className="nexus-docs-change-type">
                  <h3 className="nexus-docs-change-type-title">Normal Changes</h3>
                  <p className="text-body-base-tertiary">Changes that require assessment, approval, and scheduling. These changes go through the full change management workflow and are reviewed by the Change Advisory Board (CAB) before implementation.</p>
                </div>
                <div className="nexus-docs-change-type">
                  <h3 className="nexus-docs-change-type-title">Emergency Changes</h3>
                  <p className="text-body-base-tertiary">Urgent changes required to resolve critical incidents or security vulnerabilities. Emergency changes require expedited approval and documentation but must still follow post-implementation review processes.</p>
                </div>
              </div>
            </div>

            <div className="nexus-docs-section" id="roles">
              <h2 className="nexus-docs-section-title">6. Roles and Responsibilities</h2>
              <p className="text-body-base-tertiary">
                The change management process involves multiple stakeholders, each with specific responsibilities to ensure effective governance and execution of changes across the organization.
              </p>
              <div className="nexus-docs-roles">
                <div className="nexus-docs-role">
                  <h3 className="nexus-docs-role-title">Change Requester</h3>
                  <p className="text-body-base-tertiary">The individual or team initiating the change request. Responsible for providing detailed information about the proposed change, including business justification, risk assessment, and implementation plan.</p>
                </div>
                <div className="nexus-docs-role">
                  <h3 className="nexus-docs-role-title">Change Manager</h3>
                  <p className="text-body-base-tertiary">Oversees the change management process, coordinates activities between stakeholders, maintains documentation, and ensures compliance with established policies and procedures.</p>
                </div>
                <div className="nexus-docs-role">
                  <h3 className="nexus-docs-role-title">Change Advisory Board (CAB)</h3>
                  <p className="text-body-base-tertiary">A cross-functional team that reviews and approves significant changes. The CAB ensures that proposed changes are properly assessed for risk, impact, and alignment with organizational objectives.</p>
                </div>
                <div className="nexus-docs-role">
                  <h3 className="nexus-docs-role-title">System Owner</h3>
                  <p className="text-body-base-tertiary">The individual or team responsible for the affected system. Approves changes to their systems and ensures adequate testing and validation after implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <DocsTOC />
      </div>
    </div>
  );
}
