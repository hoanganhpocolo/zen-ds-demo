import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type { ComponentSchema } from './propDefs';

export interface InspectorEntry {
  id: string;
  component: string;
  schema: ComponentSchema;
  defaults: Record<string, unknown>;
}

interface InspectorCtx {
  selected: string | null;
  entries: Map<string, InspectorEntry>;
  overrides: Map<string, Record<string, unknown>>;
  select: (id: string | null) => void;
  register: (entry: InspectorEntry) => void;
  setOverride: (id: string, key: string, value: unknown) => void;
  getOverrides: (id: string) => Record<string, unknown>;
}

const InspectorContext = createContext<InspectorCtx | null>(null);

export function InspectorProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [entries] = useState(() => new Map<string, InspectorEntry>());
  const [overrides, setOverrides] = useState(
    () => new Map<string, Record<string, unknown>>(),
  );

  const select = useCallback((id: string | null) => setSelected(id), []);

  const register = useCallback(
    (entry: InspectorEntry) => {
      entries.set(entry.id, entry);
    },
    [entries],
  );

  const setOverride = useCallback(
    (id: string, key: string, value: unknown) => {
      setOverrides(prev => {
        const next = new Map(prev);
        next.set(id, { ...(prev.get(id) ?? {}), [key]: value });
        return next;
      });
    },
    [],
  );

  const getOverrides = useCallback(
    (id: string) => overrides.get(id) ?? {},
    [overrides],
  );

  // Click outside any Ctrl element or the inspector panel deselects
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Element;
      if (!target.closest('[data-ctrl-id]') && !target.closest('[data-inspector-panel]')) {
        setSelected(null);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <InspectorContext.Provider
      value={{ selected, entries, overrides, select, register, setOverride, getOverrides }}
    >
      {children}
    </InspectorContext.Provider>
  );
}

export function useInspector() {
  const ctx = useContext(InspectorContext);
  if (!ctx) throw new Error('useInspector must be used within InspectorProvider');
  return ctx;
}
