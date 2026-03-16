import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BarChart05 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 2a3 3 0 0 1 3 3v2.174A3 3 0 0 1 17 7h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h2c.351 0 .687.063 1 .174V5a3 3 0 0 1 3-3zM5 13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3v-6a1 1 0 0 0-1-1zm6-9a1 1 0 0 0-1 1v15h4V5a1 1 0 0 0-1-1zm6 5a1 1 0 0 0-1 1v10h3a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

BarChart05.displayName = 'BarChart05';
