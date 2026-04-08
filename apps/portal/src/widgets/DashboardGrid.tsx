import { useState, useCallback, useMemo } from 'react';
import { Button, Modal, Popover, PopoverItem, Segmented } from '@zen/components';
import { DotsHorizontal, Trash } from '@zen/icons/line';
import { getWidget, getAllWidgets } from './registry';
import './widgets.css';
import './widget-content.css';

// Register all widgets
import './GreetingWidget';
import './TicketsWidget';
import './UpdatesWidget';
import './AnalyticsWidget';
import './ToolsWidget';

export type WidgetSize = 1 | 2 | 3;

type GridSlot =
  | { type: 'widget'; id: string; widgetId: string; size: WidgetSize }
  | { type: 'empty'; id: string };

function slotSize(s: GridSlot): number {
  return s.type === 'widget' ? s.size : 1;
}

/* ── Unique empty‑slot ID generator ── */
let _eid = 0;
function makeEmpty(): GridSlot {
  return { type: 'empty', id: `e-${++_eid}` };
}
function syncCounter(slots: GridSlot[]) {
  for (const s of slots) {
    if (s.type === 'empty' && s.id.startsWith('e-')) {
      const n = parseInt(s.id.slice(2), 10);
      if (!isNaN(n) && n >= _eid) _eid = n + 1;
    }
  }
}

/* ── Normalize: ensure rows sum to 3, one trailing empty row ── */
function normalize(slots: GridSlot[]): GridSlot[] {
  const out: GridSlot[] = [];
  let col = 0;

  // Phase 1 — fit items into rows; pad when an item overflows
  for (const s of slots) {
    const sz = slotSize(s);
    if (col + sz > 3) {
      while (col < 3) { out.push(makeEmpty()); col++; }
      col = 0;
    }
    out.push(s);
    col += sz;
    if (col >= 3) col = 0;
  }
  // Pad last incomplete row
  if (col > 0) { while (col < 3) { out.push(makeEmpty()); col++; } }

  // Phase 2 — keep exactly 1 trailing all‑empty row
  let trailing = 0;
  let ci = out.length - 1;
  while (ci >= 2) {
    if (out[ci].type === 'empty' && out[ci - 1].type === 'empty' && out[ci - 2].type === 'empty') {
      trailing++;
      ci -= 3;
    } else break;
  }
  if (trailing === 0) {
    for (let i = 0; i < 3; i++) out.push(makeEmpty());
  } else if (trailing > 1) {
    out.splice(out.length - (trailing - 1) * 3);
  }

  return out;
}

/* ── Persistence ── */
const STORAGE_KEY = 'portal-dashboard-layout-v3';

const DEFAULT_SLOTS: GridSlot[] = [
  { type: 'widget', id: 'greeting-1', widgetId: 'greeting', size: 1 },
  { type: 'widget', id: 'tickets-1', widgetId: 'tickets', size: 1 },
  { type: 'widget', id: 'updates-1', widgetId: 'updates', size: 1 },
  { type: 'widget', id: 'analytics-1', widgetId: 'analytics', size: 2 },
  { type: 'widget', id: 'tools-1', widgetId: 'tools', size: 1 },
];

function loadState(): GridSlot[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr) || arr.length === 0) return null;
    if (!arr.every((s: any) => s.type === 'widget' || s.type === 'empty')) return null;
    syncCounter(arr);
    return arr;
  } catch { return null; }
}
function saveState(slots: GridSlot[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slots));
}

/* ── Position helpers ── */
function getPositions(slots: GridSlot[]) {
  const pos: { col: number; row: number }[] = [];
  let col = 0, row = 0;
  for (const s of slots) {
    pos.push({ col, row });
    col += slotSize(s);
    if (col >= 3) { col = 0; row++; }
  }
  return pos;
}

/** Count consecutive empties after `idx` in the same row */
function adjacentEmptiesAfter(slots: GridSlot[], idx: number): number {
  const positions = getPositions(slots);
  const wRow = positions[idx].row;
  let count = 0;
  for (let i = idx + 1; i < slots.length; i++) {
    if (positions[i].row !== wRow) break;
    if (slots[i].type !== 'empty') break;
    count++;
  }
  return count;
}

/* ═══════════════════════════════════════════════════ */
/* ── DashboardGrid                                 ── */
/* ═══════════════════════════════════════════════════ */

export function DashboardGrid() {
  const [slots, setSlots] = useState<GridSlot[]>(() => loadState() ?? normalize(DEFAULT_SLOTS));
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [addTargetId, setAddTargetId] = useState<string | null>(null);

  const commit = useCallback((next: GridSlot[]) => {
    const n = normalize(next);
    setSlots(n);
    saveState(n);
  }, []);

  /* Remove → replace widget with N empties (N = widget size) */
  const handleRemove = useCallback((id: string) => {
    const idx = slots.findIndex(s => s.type === 'widget' && s.id === id);
    if (idx === -1) return;
    const w = slots[idx] as Extract<GridSlot, { type: 'widget' }>;
    const next = [...slots];
    const empties = Array.from({ length: w.size }, () => makeEmpty());
    next.splice(idx, 1, ...empties);
    commit(next);
  }, [slots, commit]);

  /* Resize → consume or release adjacent empties */
  const handleResize = useCallback((id: string, newSize: WidgetSize) => {
    const idx = slots.findIndex(s => s.type === 'widget' && s.id === id);
    if (idx === -1) return;
    const w = slots[idx] as Extract<GridSlot, { type: 'widget' }>;
    if (newSize === w.size) return;

    const next = [...slots];

    if (newSize > w.size) {
      const needed = newSize - w.size;
      if (adjacentEmptiesAfter(slots, idx) < needed) return; // can't fit
      let removed = 0;
      for (let i = idx + 1; removed < needed;) {
        if (next[i].type === 'empty') { next.splice(i, 1); removed++; }
        else i++;
      }
    } else {
      const released = w.size - newSize;
      const empties = Array.from({ length: released }, () => makeEmpty());
      next.splice(idx + 1, 0, ...empties);
    }
    (next[idx] as any).size = newSize;
    commit(next);
  }, [slots, commit]);

  /* Add → place widget into an empty slot (always size 1) */
  const handleAdd = useCallback((widgetId: string) => {
    if (!addTargetId) return;
    const def = getWidget(widgetId);
    if (!def) return;
    const idx = slots.findIndex(s => s.id === addTargetId);
    if (idx === -1) return;

    const next = [...slots];
    next[idx] = { type: 'widget', id: `${widgetId}-${Date.now()}`, widgetId, size: 1 };
    commit(next);
    setShowAddPanel(false);
    setAddTargetId(null);
  }, [slots, addTargetId, commit]);

  /* Reset */
  const handleReset = useCallback(() => {
    commit(DEFAULT_SLOTS);
  }, [commit]);

  /* Pre‑compute max resize each widget can reach */
  const maxSizes = useMemo(() => {
    const map: Record<string, WidgetSize> = {};
    for (let i = 0; i < slots.length; i++) {
      const s = slots[i];
      if (s.type === 'widget') {
        map[s.id] = Math.min(3, s.size + adjacentEmptiesAfter(slots, i)) as WidgetSize;
      }
    }
    return map;
  }, [slots]);

  return (
    <div>
      <div className="dashboard-grid">
        {slots.map(slot => {
          if (slot.type === 'empty') {
            return (
              <div key={slot.id} className="dashboard-cell dashboard-cell-1">
                <div
                  className="add-widget-cell"
                  onClick={() => { setAddTargetId(slot.id); setShowAddPanel(true); }}
                >
                  <img src="/empty widget.png" alt="" className="add-widget-illustration" />
                  <span className="text-body-small add-widget-label">Add widget</span>
                </div>
              </div>
            );
          }

          const def = getWidget(slot.widgetId);
          if (!def) return null;
          const Comp = def.component;
          return (
            <div key={slot.id} className={`dashboard-cell dashboard-cell-${slot.size}`}>
              <Comp
                menu={
                  <WidgetMenu
                    size={slot.size}
                    maxSize={maxSizes[slot.id] ?? slot.size}
                    onResize={s => handleResize(slot.id, s)}
                    onRemove={() => handleRemove(slot.id)}
                  />
                }
              />
            </div>
          );
        })}
      </div>

      {/* Add widget modal */}
      <Modal
        open={showAddPanel}
        layout="basic"
        title="Add Widget"
        primaryLabel="Reset Layout"
        secondaryLabel="Cancel"
        onPrimary={handleReset}
        onSecondary={() => { setShowAddPanel(false); setAddTargetId(null); }}
        onClose={() => { setShowAddPanel(false); setAddTargetId(null); }}
      >
        <div className="add-widget-body">
          <Segmented
            size="medium"
            items={[
              { value: 'home', label: 'Home' },
              { value: 'apollo', label: 'Apollo' },
              { value: 'analytics', label: 'Analytics' },
              { value: 'fpa', label: 'FPA' },
              { value: 'legal', label: 'Legal' },
            ]}
            defaultValue="home"
          />
          <div className="add-widget-panel-horizontal">
            {getAllWidgets().map(def => (
              <button key={def.id} className="add-widget-option-horizontal" onClick={() => handleAdd(def.id)}>
                <span className="add-widget-option-emoji">{def.emoji}</span>
                <div className="add-widget-option-info">
                  <span className="text-body-small wc-bold">{def.title}</span>
                  <span className="text-caption wc-tertiary-text">{def.description}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

/* ── Widget dots menu ── */

function WidgetMenu({
  size,
  maxSize,
  onResize,
  onRemove,
}: {
  size: WidgetSize;
  maxSize: WidgetSize;
  onResize: (size: WidgetSize) => void;
  onRemove: () => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="widget-menu-wrap">
      <Button
        variant="tertiary"
        size="m"
        icon={<DotsHorizontal size={20} />}
        onClick={() => setShowMenu(v => !v)}
      />
      {showMenu && (
        <>
          <div className="widget-menu-backdrop" onClick={() => setShowMenu(false)} />
          <div className="widget-menu-dropdown">
            <Popover label="Widget size">
              {([1, 2, 3] as WidgetSize[]).map(s => (
                <PopoverItem
                  key={s}
                  label={s === 1 ? '1/3 column' : s === 2 ? '2/3 columns' : 'Full width'}
                  selected={s === size}
                  leading={
                    <span className="widget-size-preview">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <span key={i} className={`widget-size-col ${i < s ? 'widget-size-col-fill' : ''}`} />
                      ))}
                    </span>
                  }
                  onClick={() => {
                    if (s <= maxSize) { onResize(s); setShowMenu(false); }
                  }}
                  className={s > maxSize ? 'widget-menu-disabled' : undefined}
                />
              ))}
              <PopoverItem
                label="Remove widget"
                leading={<Trash size={16} />}
                noCheck
                onClick={() => { onRemove(); setShowMenu(false); }}
                className="widget-menu-danger"
              />
            </Popover>
          </div>
        </>
      )}
    </div>
  );
}
