/* GLC (Game Launching Checklist) events — mock data for the Calendar widget. */

export type GLCMilestoneType = 'cbt' | 'ob' | 'start' | 'launch';

export interface GLCMilestone {
  kind: 'milestone';
  id: string;
  game: string;
  type: GLCMilestoneType;
  /** day-of-month in the current view */
  day: number;
  /** click target — wired up later */
  href?: string;
}

export interface GLCTask {
  kind: 'task';
  id: string;
  title: string;
  game: string;
  day: number;
  locale?: 'VI' | 'EN';
  href?: string;
}

export type GLCEvent = GLCMilestone | GLCTask;

/** Visual mapping per milestone type. Keep names short — used as a label suffix. */
export const GLC_MILESTONE_META: Record<
  GLCMilestoneType,
  { label: string; tone: 'teal' | 'yellow' | 'purple' | 'pink' }
> = {
  ob:     { label: 'OB Date',    tone: 'teal' },
  cbt:    { label: 'CBT Date',   tone: 'yellow' },
  start:  { label: 'Start Date', tone: 'purple' },
  launch: { label: 'Launch',     tone: 'pink' },
};

export const glcEvents: GLCEvent[] = [
  { kind: 'milestone', id: 'm-nth-ob',    game: 'Nghịch Thuỷ Hàn', type: 'ob',    day: 13 },
  { kind: 'milestone', id: 'm-gunny-st',  game: 'Gunny Origin',    type: 'start', day: 14 },
  { kind: 'milestone', id: 'm-kof-cbt',   game: 'King of Fighters', type: 'cbt',  day: 18 },
  {
    kind: 'task',
    id: 't-mayor-sdk',
    title: 'Gửi yêu cầu chuẩn bị bộ SDK dùng tích hợp ..',
    game: 'Mayor Tycoon',
    day: 15,
    locale: 'VI',
  },
  {
    kind: 'task',
    id: 't-funzap-ipa',
    title: 'Hoàn tất gói build IPA final theo policy Store ...',
    game: 'FunZap: Fun Mini Games',
    day: 16,
    locale: 'VI',
  },
  {
    kind: 'task',
    id: 't-nth-localize',
    title: 'Gửi bản localize cho team QA review trước OB',
    game: 'Nghịch Thuỷ Hàn',
    day: 12,
    locale: 'VI',
  },
];
