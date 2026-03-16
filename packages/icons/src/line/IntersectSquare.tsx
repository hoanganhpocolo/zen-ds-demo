import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IntersectSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 2a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm3 11a3 3 0 0 1-3 3h-3v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-3zm-5-3a1 1 0 0 0-1 1v3h3a1 1 0 0 0 1-1v-3zM5 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v-3a3 3 0 0 1 3-3h3V5a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

IntersectSquare.displayName = 'IntersectSquare';
