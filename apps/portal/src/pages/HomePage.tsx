import { useState } from 'react';
import { Avatar, Button, Search } from '@zen/components';
import { Bell01, ChevronDown, Sun, Moon01, Menu01 } from '@zen/icons/line';
import { DashboardGrid } from '../widgets/DashboardGrid';
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
  const [dark, setDark] = useState(document.documentElement.getAttribute('data-theme') === 'dark');
  const greeting = getGreeting();

  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setDark(!dark);
  };

  return (
    <div className="home-topbar">
      <div className="home-topbar-mobile-left">
        <Button variant="flat-primary" size="m" icon={<Menu01 size={20} />} onClick={onMenuClick} />
        <img src={dark ? '/vnggames-logo-dark.svg' : '/vnggames-logo.svg'} alt="VNGGames" width={34} height={24} />
      </div>
      <div className="home-topbar-greeting">
        <img src={greeting.icon} alt="" width={65} height={65} />
        <h2 className="text-h4">{greeting.text}! Nhan,</h2>
      </div>
      <div className="home-topbar-right">
        <div className="home-topbar-search">
          <Search size="default" placeholder="Search" />
        </div>
        <Button variant="flat-primary" size="m" icon={dark ? <Sun size={20} /> : <Moon01 size={20} />} onClick={toggleTheme} />
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

/* ── Main Page ── */
export function HomePage({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="home-page">
      <TopBar onMenuClick={onMenuClick} />
      <DashboardGrid />
    </div>
  );
}
