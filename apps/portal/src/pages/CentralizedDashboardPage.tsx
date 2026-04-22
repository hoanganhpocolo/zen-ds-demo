import { SearchMedium } from '@zen/icons/line';
import { useDarkMode } from '../useDarkMode';
import { useNavigate } from 'react-router-dom';
import { PortalTopBar } from '../components/PortalTopBar';
import './CentralizedDashboardPage.css';
import './HomePage.css';

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

function DashboardCard({ name, label, logo, logoDark, textLogo, logoColor, onClick }: DashboardCardProps) {
  const { dark } = useDarkMode();
  const logoSrc = dark && logoDark ? logoDark : logo;

  return (
    <div className="centralized-card" onClick={onClick}>
      <div className="centralized-card-logo">
        {logoSrc && <img src={logoSrc} alt={name} />}
        {textLogo && (
          <span className="centralized-card-text-logo" style={logoColor ? { color: logoColor } : undefined}>
            {textLogo}
          </span>
        )}
      </div>
      <div className="centralized-card-label">
        <p className="text-body-base-secondary">{label}</p>
      </div>
    </div>
  );
}

/* ── Dashboard Item ── */
interface DashboardItem {
  name: string;
  label: string;
  logo?: string;
  logoDark?: string;
  textLogo?: string;
  logoColor?: string;
  description?: string;
  page?: string;
}

/* ── Main Page ── */
export function CentralizedDashboardPage({ onMenuClick }: { onMenuClick?: () => void }) {
  const navigate = useNavigate();

  const featuredDashboards: DashboardItem[] = [
    { name: 'Game Studio 2', label: 'Game Studio 2', logo: '/gs2-logo.png' },
    { name: 'Financial Planning', label: 'Financial Planning', logo: '/fpa-logo.png' },
    { name: 'Legal Docs', label: 'Legal Docs', logo: '/legal-logo.png', logoDark: '/legal-logo-dark.png' },
  ];

  const allDashboards: DashboardItem[] = [
    { name: 'NC Soft & VNGG', label: 'NC Soft & VNGG', logo: '/nc-logo.png' },
    { name: 'ROBLOX Experience Studio', label: 'ROBLOX Experience Studio', logo: '/roblox-logo.png' },
    { name: 'Game Studio 3', label: 'Game Studio 3', logo: '/gs1-logo.png', logoDark: '/gs1-logo-dark.png' },
    { name: 'Game Studio 2', label: 'Game Studio 2', logo: '/gs2-logo.png' },
    { name: 'Game Studio 9', label: 'Game Studio 9', logo: '/gs9-logo.png' },
    { name: 'Game Studio Dreamer', label: 'Game Studio Dreamer', logo: '/dreamer-logo.png' },
    { name: 'Game Studio SEA', label: 'Game Studio SEA', logo: '/sea-logo.png', logoDark: '/sea-logo-dark.png' },
    { name: 'Game Studio Global', label: 'Game Studio Global', logo: '/global.png' },
    { name: 'Financial Planning', label: 'Financial Planning', logo: '/fpa-logo.png' },
    { name: 'Legal', label: 'Legal', logo: '/legal-logo.png', logoDark: '/legal-logo-dark.png' },
    { name: 'Human Resources', label: 'Human Resources', logo: '/HR-logo.png', page: 'hr-dashboard' },
  ];

  return (
    <div className="centralized-page">
      <img src="https://www.figma.com/api/mcp/asset/c24e3069-894c-4f4c-beb7-eaeaacdfaa1f" alt="" className="centralized-page-bg" />
      <PortalTopBar onMenuClick={onMenuClick} userName="Luna" showLogo={false} />
      <div className="centralized-content">
        <div className="centralized-welcome">
          <p className="text-h3 centralized-welcome-sub">All data and insight in one place</p>
          <h1 className="centralized-welcome-title">Welcome to VNGGames Dashboard</h1>
          <label className="centralized-search-bar">
            <input type="text" className="centralized-search-input" placeholder="Search dashboard" />
            <div className="centralized-search-btn">
              <SearchMedium size={20} className="search-icon" />
            </div>
          </label>
        </div>

        <div className="centralized-section centralized-section--featured">
          <h2 className="centralized-section-title recently-view-title">Recently view</h2>
          <div className="centralized-featured">
            {featuredDashboards.map((dashboard) => (
              <DashboardCard
                key={dashboard.name}
                name={dashboard.name}
                label={dashboard.label}
                logo={dashboard.logo}
                logoDark={dashboard.logoDark}
                textLogo={dashboard.textLogo}
                logoColor={dashboard.logoColor}
                onClick={dashboard.page ? () => navigate(`/analytics/${dashboard.page}`) : undefined}
              />
            ))}
          </div>
        </div>
      </div>

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
              onClick={dashboard.page ? () => navigate(`/analytics/${dashboard.page}`) : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
