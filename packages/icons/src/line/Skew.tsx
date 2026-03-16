import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Skew = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 2a1 1 0 0 1 1 1v1h8V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.18l-1.6 8H20a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.18l1.6-8H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 20h2v-2H3zm14 0h2v-2h-2zM9 7a1 1 0 0 1-1 1H6.82l-1.6 8H6a1 1 0 0 1 1 1v1h8v-1a1 1 0 0 1 1-1h1.18l1.6-8H18a1 1 0 0 1-1-1V6H9zM5 6h2V4H5zm14 0h2V4h-2z"/></svg>
    );
  },
);

Skew.displayName = 'Skew';
