import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IntersectSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.154 2.004A3 3 0 0 1 16 5v3h3l.154.004A3 3 0 0 1 22 11v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-2.996-2.846L8 19v-3H5a3 3 0 0 1-2.996-2.846L2 13V5a3 3 0 0 1 3-3h8zM16 13a3 3 0 0 1-3 3h-3v3l.005.102A1 1 0 0 0 11 20h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-.898-.995L19 10h-3zM5 4a1 1 0 0 0-1 1v8l.005.102A1 1 0 0 0 5 14h3v-3a3 3 0 0 1 3-3h3V5a1 1 0 0 0-.898-.995L13 4z"/></svg>
    );
  },
);

IntersectSquare.displayName = 'IntersectSquare';
