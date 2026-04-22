import { SearchMedium } from '@zen/icons/line';
import { useNavigate } from 'react-router-dom';
import { PortalTopBar } from '../components/PortalTopBar';
import './CentralizedDocsPage.css';
import './HomePage.css';

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

export function CentralizedDocsPage({ onMenuClick }: { onMenuClick?: () => void }) {
  const navigate = useNavigate();

  const featuredDocs: DashboardItem[] = [
    { name: 'Nexus Docs', label: 'Nexus Docs', logo: '/nexus-logo.png', description: 'Centralized documentation hub for all Nexus Build services and APIs.', page: 'nexus-docs' },
    { name: 'Financial Planning', label: 'Financial Planning', logo: '/fpa-logo.png', description: 'Financial reports, budgets, and planning documents for VNGGames.' },
    { name: 'Security Docs', label: 'Security Docs', logo: '/SRM-logo.png', logoDark: '/SRM-logo-dark.png', description: 'Security policies, compliance docs, and risk management guidelines.' },
    { name: 'Legal Docs', label: 'Legal Docs', logo: '/legal-logo.png', logoDark: '/legal-logo-dark.png', description: 'Legal agreements, contracts, and compliance documentation.' },
    { name: 'Human Resources', label: 'Human Resources', logo: '/HR-logo.png', description: 'HR policies, employee handbook, and recruitment documents.' },
  ];

  return (
    <div className="centralized-page">
      <img src="https://www.figma.com/api/mcp/asset/c24e3069-894c-4f4c-beb7-eaeaacdfaa1f" alt="" className="centralized-page-bg" />
      <PortalTopBar onMenuClick={onMenuClick} userName="Luna" showLogo={false} />
      <div className="centralized-content">
        <div className="centralized-welcome">
          <p className="text-h3 centralized-welcome-sub">All documents in one place</p>
          <h1 className="centralized-welcome-title">Welcome to VNGGames Docs</h1>
          <label className="centralized-search-bar">
            <input type="text" className="centralized-search-input" placeholder="Search document" />
            <div className="centralized-search-btn">
              <SearchMedium size={20} className="search-icon" />
            </div>
          </label>
        </div>

        <div className="centralized-section centralized-section--featured">
          <h2 className="centralized-section-title recently-view-title">Recent documents</h2>
          <div className="centralized-featured centralized-featured--docs">
            {featuredDocs.map((doc) => (
              <div
                key={doc.name}
                className="centralized-card centralized-card--docs"
                onClick={doc.page ? () => navigate(`/docs/${doc.page}`) : undefined}
              >
                <div className="centralized-card-logo">
                  {doc.logo && <img src={doc.logo} alt={doc.name} />}
                </div>
                <div className="centralized-card-label">
                  <p className="centralized-card-title">{doc.label}</p>
                  {doc.description && <p className="centralized-card-description">{doc.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </div>
  );
}
