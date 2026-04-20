import type { ComponentType } from 'react';
import {
  Home03, Ticket01, Rocket, BarChartSquare01,
  CodeSquare01, MessageChatCircle, FileDoc, Users,
} from '@zen/icons/line';

export type AppColor =
  | 'neutral' | 'accent' | 'info' | 'positive' | 'negative' | 'warning'
  | 'yellow' | 'orange' | 'red' | 'crimson' | 'pink' | 'plum'
  | 'purple' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'brown';

export interface AppDef {
  id: string;
  name: string;
  desc: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  semantic: AppColor;
}

export const APP_REGISTRY: AppDef[] = [
  { id: 'nexus',     name: 'Nexus Tickets',  desc: 'Centralized ticket management for requests',        icon: Ticket01,          semantic: 'blue' },
  { id: 'apollo',    name: 'Apollo',          desc: 'Targeted campaigns that hit',                       icon: Rocket,            semantic: 'teal' },
  { id: 'analytics', name: 'Analytics',       desc: 'Track game performance and measure key metrics.',    icon: BarChartSquare01,  semantic: 'purple' },
  { id: 'sdk',       name: 'SDK Management',  desc: 'Manage and configure your game SDK integrations.',   icon: CodeSquare01,      semantic: 'brown' },
  { id: 'gigi',      name: 'GiGi Chat',       desc: 'AI-powered chat assistant',                         icon: MessageChatCircle, semantic: 'indigo' },
  { id: 'docs',      name: 'Docs',            desc: 'Documentation and knowledge base',                  icon: FileDoc,           semantic: 'cyan' },
  { id: 'home',      name: 'Home',            desc: 'Home dashboard',                                    icon: Home03,            semantic: 'accent' },
  { id: 'hra',       name: 'HRA',             desc: 'Human Resources App',                               icon: Users,             semantic: 'pink' },
];

export function getApp(id: string): AppDef | undefined {
  return APP_REGISTRY.find(a => a.id === id);
}
