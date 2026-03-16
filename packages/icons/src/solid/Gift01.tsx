import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Gift01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.5 1a3.5 3.5 0 0 1 3.163 5H21a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v6a4 4 0 0 1-4 4h-4V13h-2v10H7a4 4 0 0 1-4-4v-6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.337A3.5 3.5 0 0 1 12 2.052 3.5 3.5 0 0 1 14.5 1M3 11h8V8H3zm10 0h8V8h-8zM9.5 3a1.5 1.5 0 1 0 0 3H11V4.5A1.5 1.5 0 0 0 9.5 3m5 0A1.5 1.5 0 0 0 13 4.5V6h1.5a1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

Gift01.displayName = 'Gift01';
