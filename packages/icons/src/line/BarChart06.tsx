import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BarChart06 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 2a3 3 0 0 1 3 3v2.174A3 3 0 0 1 11 7h2a3 3 0 0 1 3 3v2.174A3 3 0 0 1 17 12h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3V5a1 1 0 0 0-1-1zm6 5a1 1 0 0 0-1 1v10h4V10a1 1 0 0 0-1-1zm6 5a1 1 0 0 0-1 1v5h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

BarChart06.displayName = 'BarChart06';
