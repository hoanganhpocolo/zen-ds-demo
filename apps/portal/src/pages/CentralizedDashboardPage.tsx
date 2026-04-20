import { Avatar, Button, Search } from '@zen/components';
import { Bell01, ChevronDown, Sun, Moon01, Menu01, SearchMedium } from '@zen/icons/line';
import { useDarkMode } from '../useDarkMode';
import { useNavigate } from 'react-router-dom';
import './CentralizedDashboardPage.css';
import './HomePage.css';

/* ── Top Bar ── */
function getGreeting(): { text: string; icon: string } {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { text: 'Good morning', icon: '/Day.png' };
  if (hour >= 12 && hour < 17) return { text: 'Good afternoon', icon: '/Day.png' };
  if (hour >= 17 && hour < 21) return { text: 'Good evening', icon: '/Night.png' };
  return { text: 'Good night', icon: '/Night.png' };
}

function TopBar({ onMenuClick }: { onMenuClick?: () => void }) {
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
        <div id="header-search" className="home-topbar-search">
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

/* ── Dashboard Card ── */
interface DashboardCardProps {
  name: string;
  label: string;
  logo?: string;
  logoDark?: string;
  textLogo?: string;
  logoColor?: string;
  description?: string;
  onClick?: () => void;
}

function DashboardCard({ name, label, logo, logoDark, textLogo, logoColor, description, onClick, variant }: DashboardCardProps & { variant?: 'dashboard' | 'docs' }) {
  const { dark } = useDarkMode();
  const logoSrc = dark && logoDark ? logoDark : logo;

  return (
    <div className={`centralized-card${variant === 'docs' ? ' centralized-card--docs' : ''}`} onClick={onClick}>
      <div className="centralized-card-logo">
        {logoSrc && <img src={logoSrc} alt={name} />}
        {textLogo && (
          <span className="centralized-card-text-logo" style={logoColor ? { color: logoColor } : undefined}>
            {textLogo}
          </span>
        )}
      </div>
      <div className="centralized-card-label">
        {variant === 'docs' ? (
          <>
            <p className="centralized-card-title">{label}</p>
            {description && <p className="centralized-card-description">{description}</p>}
          </>
        ) : (
          <p className="text-body-base-secondary">{label}</p>
        )}
      </div>
    </div>
  );
}

/* ── Main Page ── */
export function CentralizedDashboardPage({ onMenuClick, variant = 'dashboard' }: { onMenuClick?: () => void; variant?: 'dashboard' | 'docs' }) {
  const navigate = useNavigate();

  const featuredDashboards = variant === 'docs'
    ? [
        { name: 'Nexus Docs', label: 'Nexus Docs', logo: '/nexus-logo.png', description: 'Centralized documentation hub for all Nexus Build services and APIs.', page: 'nexus-docs' },
        { name: 'Financial Planning', label: 'Financial Planning', logo: '/FPA-logo.png', description: 'Financial reports, budgets, and planning documents for VNGGames.' },
        { name: 'Security Docs', label: 'Security Docs', logo: '/SRM-logo.png', logoDark: '/SRM-logo-dark.png', description: 'Security policies, compliance docs, and risk management guidelines.' },
        { name: 'Legal Docs', label: 'Legal Docs', logo: '/legal-logo.png', logoDark: '/legal-logo-dark.png', description: 'Legal agreements, contracts, and compliance documentation.' },
        { name: 'Human Resources', label: 'Human Resources', logo: '/HR-logo.png', description: 'HR policies, employee handbook, and recruitment documents.' },
      ]
    : [
        { name: 'Game Studio 2', label: 'Game Studio 2', logo: '/gs2-logo.png' },
        { name: 'Financial Planning', label: 'Financial Planning', logo: '/FPA-logo.png' },
        { name: 'Legal Docs', label: 'Legal Docs', logo: '/legal-logo.png', logoDark: '/legal-logo-dark.png' },
      ];

  const allDashboards = variant === 'docs'
    ? []
    : [
        { name: 'NC Soft & VNGG', label: 'NC Soft & VNGG', logo: '/ncsoft -logo.png' },
        { name: 'ROBLOX Experience Studio', label: 'ROBLOX Experience Studio', logo: '/roblox-logo.png' },
        { name: 'Game Studio 3', label: 'Game Studio 3', logo: '/gs1-logo.png', logoDark: '/gs1-logo-dark.png' },
        { name: 'Game Studio 2', label: 'Game Studio 2', logo: '/gs2-logo.png' },
        { name: 'Game Studio 9', label: 'Game Studio 9', logo: '/gs9-logo.png' },
        { name: 'Game Studio Dreamer', label: 'Game Studio Dreamer', logo: '/dreamer-logo.png' },
        { name: 'Game Studio SEA', label: 'Game Studio SEA', logo: '/SEA-logo.png', logoDark: '/SEA-logo-dark.png' },
        { name: 'Game Studio Global', label: 'Game Studio Global', logo: '/studio-global-logo.png' },
        { name: 'Finance Analytics', label: 'Finance Analytics', logo: '/FPA-logo.png' },
        { name: 'Legal', label: 'Legal', logo: '/legal-logo.png', logoDark: '/legal-logo-dark.png' },
        { name: 'Human Resources', label: 'Human Resources', logo: '/HR-logo.png', page: 'hr-dashboard' },
      ];

  return (
    <div className="centralized-page">
      <img src="https://www.figma.com/api/mcp/asset/c24e3069-894c-4f4c-beb7-eaeaacdfaa1f" alt="" className="centralized-page-bg" />
      <TopBar onMenuClick={onMenuClick} />
      <div className="centralized-content">
        <div className="centralized-welcome">
          <p className="text-h3 centralized-welcome-sub">{variant === 'docs' ? 'All documents in one place' : 'All data and insight in one place'}</p>
          <h1 className="centralized-welcome-title">{variant === 'docs' ? 'Welcome to VNGGames Docs' : 'Welcome to VNGGames Dashboard'}</h1>
          <label className="centralized-search-bar">
            <input type="text" className="centralized-search-input" placeholder={variant === 'docs' ? 'Search document' : 'Search dashboard'} />
            <div className="centralized-search-btn">
              <SearchMedium size={20} className="search-icon" />
            </div>
          </label>
        </div>

        <div className="centralized-section centralized-section--featured">
          <h2 className="centralized-section-title recently-view-title">{variant === 'docs' ? 'Recent documents' : 'Recently view'}</h2>
          <div className={`centralized-featured${variant === 'docs' ? ' centralized-featured--docs' : ''}`}>
            {featuredDashboards.map((dashboard) => (
              <DashboardCard
                key={dashboard.name}
                name={dashboard.name}
                label={dashboard.label}
                logo={dashboard.logo}
                logoDark={dashboard.logoDark}
                textLogo={dashboard.textLogo}
                logoColor={dashboard.logoColor}
                description={dashboard.description}
                onClick={dashboard.page ? () => navigate(`/centralized/${dashboard.page}`) : undefined}
                variant={variant}
              />
            ))}
          </div>
        </div>

        {variant === 'docs' && (
          <div className="centralized-section centralized-section--recently">
            <h2 className="centralized-section-title recently-view-title">Recently view</h2>
            <div className="centralized-recently-grid">
              <div className="centralized-recently-card">
                <div className="centralized-recently-card-image">
                  <img src="https://www.figma.com/api/mcp/asset/c6726eb1-d256-4966-a00f-c917b201e4d1" alt="" />
                </div>
                <div className="centralized-recently-card-content">
                  <p className="centralized-recently-card-category">Legal Docs</p>
                  <p className="centralized-recently-card-title">SOX 404 Key Control Summary for Legal Process</p>
                  <p className="centralized-recently-card-date">24/10/2024</p>
                  <p className="centralized-recently-card-desc">This article summarizes key SOX 404 controls applicable to legal operations, including change management, access control, and documentation standards to support audit readiness</p>
                </div>
              </div>
              <div className="centralized-recently-card">
                <div className="centralized-recently-card-image">
                  <img src="https://www.figma.com/api/mcp/asset/f9b5d36e-97b8-43eb-a8dc-f1773558831b" alt="" />
                </div>
                <div className="centralized-recently-card-content">
                  <p className="centralized-recently-card-category">Legal Docs</p>
                  <p className="centralized-recently-card-title">Standard Contract Lifecycle Management (CLM) Process</p>
                  <p className="centralized-recently-card-date">24/10/2024</p>
                  <p className="centralized-recently-card-desc">A standardized framework describing how contracts are drafted, reviewed, approved, signed, stored, and monitored throughout their lifecycle to reduce legal and operational risks</p>
                </div>
              </div>
              <div className="centralized-recently-card">
                <div className="centralized-recently-card-image">
                  <img src="https://www.figma.com/api/mcp/asset/5bec9315-2f5e-437e-8e95-38545576ed3e" alt="" />
                </div>
                <div className="centralized-recently-card-content">
                  <p className="centralized-recently-card-category">FPA Docs</p>
                  <p className="centralized-recently-card-title">VNGGames Business KPI and Financial Metrics explanation</p>
                  <p className="centralized-recently-card-date">24/10/2024</p>
                  <p className="centralized-recently-card-desc">This policy outlines retention periods, storage requirements, and disposal procedures for legal documents, ensuring compliance with regulatory and internal governance standards</p>
                </div>
              </div>
              <div className="centralized-recently-card">
                <div className="centralized-recently-card-image">
                  <img src="https://www.figma.com/api/mcp/asset/5b6b4afa-d82a-4da2-9d33-9e1133b459d5" alt="" />
                </div>
                <div className="centralized-recently-card-content">
                  <p className="centralized-recently-card-category">FPA Docs</p>
                  <p className="centralized-recently-card-title">VNGGames Annual Business & Financial Planning and Process</p>
                  <p className="centralized-recently-card-date">24/10/2024</p>
                  <p className="centralized-recently-card-desc">This policy outlines retention periods, storage requirements, and disposal procedures for legal documents, ensuring compliance with regulatory and internal governance standards</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {allDashboards.length > 0 && (
        <div className="centralized-all-dashboards">
          <h2 className="centralized-section-title">All dashboards</h2>
          <div className="centralized-dashboards-grid">
            {allDashboards.map((dashboard) => (
              <DashboardCard
                key={dashboard.name}
                name={dashboard.name}
                label={dashboard.label}
                logo={dashboard.logo}
                logoDark={dashboard.logoDark}
                textLogo={dashboard.textLogo}
                logoColor={dashboard.logoColor}
                onClick={dashboard.page ? () => navigate(`/centralized/${dashboard.page}`) : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
