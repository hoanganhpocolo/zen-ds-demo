import { Heart } from '@zen/icons/line';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import './widget-content.css';

const tools = [
  { name: 'Nexus Tickets', desc: 'Centralized ticket management for requests', color: '#eff6ff', icon: '📋' },
  { name: 'Apollo', desc: 'Targeted campaigns that hit', color: '#fef3c7', icon: '🚀' },
  { name: 'Analytics', desc: 'Track game performance and measure key metrics.', color: '#f5f3ff', icon: '📊' },
  { name: 'SDK Management', desc: 'Manage and configure your game SDK integrations.', color: '#ecfdf5', icon: 'SDK' },
  { name: 'GiGi Chat', desc: 'AI-powered chat assistant', color: '#f0fdf4', icon: '💬' },
];

export function ToolsWidget({ onRemove, menu }: { onRemove?: () => void; menu?: React.ReactNode }) {
  return (
    <WidgetShell
      title="Favourited Tools"
      icon={<Heart size={20} />}
      menu={menu}
    >
      <div className="wc-tool-list">
        {tools.map((tool, i) => (
          <div key={i} className="wc-tool-item">
            <div className="wc-tool-icon" style={{ background: tool.color }}>
              <span>{tool.icon}</span>
            </div>
            <div className="wc-tool-info">
              <p className="text-body-small wc-bold">{tool.name}</p>
              <p className="text-caption wc-tertiary-text">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

registerWidget({
  id: 'tools',
  title: 'Favourited Tools',
  defaultW: 1,
  defaultH: 4,
  minH: 2,
  component: ToolsWidget,
  emoji: '⭐',
  description: 'Quick access to your favourite tools',
});
