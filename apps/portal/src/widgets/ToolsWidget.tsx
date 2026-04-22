import { Heart } from '@zen/icons/line';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import { APP_REGISTRY } from '../app-registry';
import { AppIcon } from '../AppIcon';
import './widget-content.css';

const allTools = APP_REGISTRY.filter(a => a.id !== 'home' && a.id !== 'docs').slice(0, 5);

export function ToolsWidget({ menu, maxItems }: { menu?: React.ReactNode; maxItems?: number }) {
  const tools = maxItems != null ? allTools.slice(0, maxItems) : allTools;
  return (
    <WidgetShell
      title="Favourited Tools"
      icon={<Heart size={20} />}
      menu={menu}
    >
      <div className="wc-tool-list">
        {tools.map(tool => (
          <div key={tool.id} className="wc-tool-item">
            <AppIcon icon={tool.icon} semantic={tool.semantic} size="lg" />
            <div className="wc-tool-info">
              <p className="text-body-base wc-bold">{tool.name}</p>
              <p className="text-body-small wc-tertiary-text">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

registerWidget({
  id: 'tools',
  title: 'Favourite Tools',
  category: 'home',
  defaultW: 1,
  defaultH: 4,
  minH: 2,
  component: ToolsWidget,
  emoji: '⭐',
  description: 'Quick access to your favourite tools',
});
