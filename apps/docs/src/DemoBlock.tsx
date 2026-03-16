import type { CSSProperties, ReactNode } from 'react';

interface DemoBlockProps {
  title: string;
  description?: string;
  children: ReactNode;
  direction?: 'row' | 'column';
  fullWidth?: boolean;
  previewStyle?: CSSProperties;
}

export function DemoBlock({ title, description, children, direction, fullWidth, previewStyle }: DemoBlockProps) {
  return (
    <div className="docs-demo" data-full-width={fullWidth || undefined}>
      <div
        className="docs-demo-preview"
        data-direction={direction || undefined}
        style={previewStyle}
      >
        {children}
      </div>
      <div className="docs-demo-meta">
        <div className="docs-demo-title text-body-base-primary">{title}</div>
        {description && <div className="docs-demo-description text-caption">{description}</div>}
      </div>
    </div>
  );
}
