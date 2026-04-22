import { PortalTopBar } from '../components/PortalTopBar';
import { DashboardGrid } from '../widgets/DashboardGrid';
import './HomePage.css';

export function HomePage({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="home-page">
      <PortalTopBar onMenuClick={onMenuClick} userName="Nhan" />
      <DashboardGrid />
    </div>
  );
}
