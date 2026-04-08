import { useState, useEffect, useCallback } from 'react';
import { useInspector } from './InspectorContext';
import styles from './inspector.module.css';

/* ── Selection ring ─────────────────────────────────────────────────── */

/**
 * Draws a floating accent ring around the currently selected Ctrl element.
 * Reads DOM rect from the first real child of [data-ctrl-id], so it has no
 * layout impact regardless of the Ctrl wrapper using display:contents.
 */
export function SelectionRing() {
  const { selected } = useInspector();
  const [rect, setRect] = useState<DOMRect | null>(null);

  const updateRect = useCallback(() => {
    if (!selected) { setRect(null); return; }
    const wrapper = document.querySelector(`[data-ctrl-id="${selected}"]`);
    const child = wrapper?.firstElementChild as HTMLElement | null;
    setRect(child ? child.getBoundingClientRect() : null);
  }, [selected]);

  useEffect(() => {
    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, true);
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect, true);
    };
  }, [updateRect]);

  if (!rect) return null;

  return (
    <div
      className={styles.ring}
      style={{
        top:    rect.top    - 3,
        left:   rect.left   - 3,
        width:  rect.width  + 6,
        height: rect.height + 6,
      }}
    />
  );
}

/* ── Props panel ─────────────────────────────────────────────────────── */

export function PropsPanel() {
  const { selected, entries, overrides, setOverride, select } = useInspector();

  const entry    = selected ? entries.get(selected) : null;
  const ov       = (selected && overrides.get(selected)) || {};
  const current  = entry ? { ...entry.defaults, ...ov } : {};
  const schema   = entry?.schema ?? {};
  const keys     = Object.keys(schema);

  return (
    <div
      className={[styles.panel, selected ? styles.panelOpen : ''].filter(Boolean).join(' ')}
      data-inspector-panel=""
      onClick={e => e.stopPropagation()}
    >
      {entry && (
        <>
          {/* Header */}
          <div className={styles.panelHeader}>
            <div className={styles.panelTitle}>
              <span className={styles.panelComp}>{entry.component}</span>
              <span className={styles.panelId}>#{entry.id}</span>
            </div>
            <button className={styles.closeBtn} onClick={() => select(null)} title="Close">✕</button>
          </div>

          {/* Controls */}
          <div className={styles.panelBody}>
            {keys.length === 0 && (
              <p className={styles.noProps}>No configurable props</p>
            )}

            {keys.map(key => {
              const def = schema[key];
              const val = current[key];

              if (def.type === 'boolean') {
                return (
                  <div key={key} className={styles.boolRow}>
                    <span className={styles.boolLabel}>{key}</span>
                    <button
                      className={[styles.boolBtn, val ? styles.boolBtnOn : ''].filter(Boolean).join(' ')}
                      onClick={() => setOverride(entry.id, key, !val)}
                    >
                      <span className={styles.boolDot} />
                      {val ? 'true' : 'false'}
                    </button>
                  </div>
                );
              }

              if (def.type === 'select') {
                return (
                  <div key={key} className={styles.propRow}>
                    <label className={styles.propLabel}>{key}</label>
                    <select
                      className={styles.propSelect}
                      value={String(val ?? '')}
                      onChange={e => setOverride(entry.id, key, e.target.value)}
                    >
                      {def.options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                );
              }

              if (def.type === 'text') {
                return (
                  <div key={key} className={styles.propRow}>
                    <label className={styles.propLabel}>{key}</label>
                    <input
                      className={styles.propInput}
                      type="text"
                      value={String(val ?? '')}
                      onChange={e => setOverride(entry.id, key, e.target.value)}
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
        </>
      )}
    </div>
  );
}
