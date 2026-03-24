import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Segmented } from '@zen/components';
import { Eye, Code01 } from '@zen/icons/line';
import { CodeBlock } from './CodeBlock';
import styles from './DemoBlock.module.css';

interface DemoBlockProps {
  title: string;
  description?: string;
  children: ReactNode;
  direction?: 'row' | 'column';
  fullWidth?: boolean;
  previewStyle?: CSSProperties;
  style?: CSSProperties;
  code?: string;
}

export function DemoBlock({
  title,
  description,
  children,
  direction,
  fullWidth,
  previewStyle,
  style,
  code,
}: DemoBlockProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="docs-demo" data-full-width={fullWidth || undefined} style={style}>
      {code && (
        <div className={styles.tabBar}>
          <Segmented
            value={tab}
            onChange={(v) => setTab(v as 'preview' | 'code')}
            items={[
              { value: 'preview', label: 'Preview', icon: <Eye size={16} /> },
              { value: 'code', label: 'Code', icon: <Code01 size={16} /> },
            ]}
          />
        </div>
      )}

      {tab === 'preview' && (
        <div
          className="docs-demo-preview"
          data-direction={direction || undefined}
          style={previewStyle}
        >
          {children}
        </div>
      )}

      {tab === 'code' && code && (
        <div className={styles.codePane}>
          <CodeBlock code={code} />
        </div>
      )}

      <div className="docs-demo-meta">
        <div className="docs-demo-title text-body-base-primary">{title}</div>
        {description && <div className="docs-demo-description text-caption">{description}</div>}
      </div>
    </div>
  );
}
