import { useEffect, type ReactNode } from 'react';
import { useInspector } from './InspectorContext';
import { PROP_DEFS, type ComponentSchema } from './propDefs';

interface CtrlProps {
  /** Unique stable identifier for this instance */
  id: string;
  /** Zen component name — used to look up the prop schema */
  comp: string;
  /** Initial (default) prop values */
  init: Record<string, unknown>;
  /** Optional schema override (if not defined in propDefs) */
  schema?: ComponentSchema;
  /** Render prop receives merged props (init + live overrides) */
  children: (props: Record<string, unknown>) => ReactNode;
}

/**
 * Wraps a Zen component to make it clickable and inspectable.
 * Uses display:contents so it has no layout impact.
 * Click → selects component → PropsPanel appears with live controls.
 */
export function Ctrl({ id, comp, init, schema, children }: CtrlProps) {
  const { selected, select, register, getOverrides } = useInspector();

  useEffect(() => {
    register({
      id,
      component: comp,
      schema: schema ?? PROP_DEFS[comp] ?? {},
      defaults: init,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, comp]);

  const merged = { ...init, ...getOverrides(id) };
  const isSelected = selected === id;

  return (
    <span
      data-ctrl-id={id}
      data-ctrl-selected={isSelected ? 'true' : undefined}
      style={{ display: 'contents' }}
      onClick={e => {
        e.stopPropagation();
        select(isSelected ? null : id);
      }}
    >
      {children(merged)}
    </span>
  );
}
