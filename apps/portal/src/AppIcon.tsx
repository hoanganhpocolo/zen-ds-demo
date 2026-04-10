import type { AppColor } from './app-registry';
import type { ComponentType } from 'react';
import './AppIcon.css';

interface AppIconProps {
  icon: ComponentType<{ size?: number }>;
  semantic: AppColor;
  size?: 'sm' | 'md' | 'lg';
}

export function AppIcon({ icon: Icon, semantic, size = 'md' }: AppIconProps) {
  return (
    <span className={`app-icon app-icon-${size} app-icon-${semantic}`}>
      <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
    </span>
  );
}
