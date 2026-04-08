import type { ComponentType, ReactNode } from 'react';

export interface WidgetDef {
  id: string;
  title: string;
  /** Default column span: 1 (small), 2 (medium), 3 (large/full) */
  defaultW: 1 | 2 | 3;
  /** Default row span (each row unit = ~120px) */
  defaultH: number;
  /** Min column span */
  minW?: number;
  /** Min row span */
  minH?: number;
  /** Component to render */
  component: ComponentType<{ onRemove?: () => void; menu?: React.ReactNode }>;
  /** Emoji or icon for add panel */
  emoji?: string;
  /** Description for add panel */
  description?: string;
}

const registry = new Map<string, WidgetDef>();

export function registerWidget(def: WidgetDef) {
  registry.set(def.id, def);
}

export function getWidget(id: string): WidgetDef | undefined {
  return registry.get(id);
}

export function getAllWidgets(): WidgetDef[] {
  return Array.from(registry.values());
}
