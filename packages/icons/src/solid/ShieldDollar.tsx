import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShieldDollar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.051 1.33a3 3 0 0 1 1.897 0l6.877 2.293a3 3 0 0 1 2.04 3.094l-.537 6.439a9 9 0 0 1-4.198 6.885l-4.6 2.875a1 1 0 0 1-1.06 0L6.868 20.04a9 9 0 0 1-4.199-6.885l-.537-6.439a3 3 0 0 1 2.041-3.094zm.022 5.234a2.82 2.82 0 0 0-1.607.833 2.94 2.94 0 0 0-.82 2.043c0 .76.292 1.496.82 2.043a2.8 2.8 0 0 0 2.022.863h1.17a.8.8 0 0 1 .583.254.94.94 0 0 1 .258.654.94.94 0 0 1-.258.653.8.8 0 0 1-.582.253h-1.7a.66.66 0 0 1-.66-.66h-2a2.66 2.66 0 0 0 2.66 2.66h.114v1.34h2v-1.37a2.82 2.82 0 0 0 1.607-.833c.529-.548.82-1.284.82-2.043s-.291-1.496-.82-2.043a2.8 2.8 0 0 0-2.021-.865h-1.171a.8.8 0 0 1-.583-.253.94.94 0 0 1-.26-.653.94.94 0 0 1 .26-.653.8.8 0 0 1 .583-.253h1.445c.313 0 .566.253.566.566h2c0-1.37-1.074-2.49-2.426-2.563V5.5h-2z"/></svg>
    );
  },
);

ShieldDollar.displayName = 'ShieldDollar';
