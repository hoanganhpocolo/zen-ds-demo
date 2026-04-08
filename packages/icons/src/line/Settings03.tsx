import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Settings03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6 12a4 4 0 0 1 3.874 3H21v2H9.874A4.002 4.002 0 0 1 2 16a4 4 0 0 1 4-4m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M18 4a4 4 0 1 1-3.874 5H3V7h11.126c.444-1.725 2.01-3 3.874-3m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

Settings03.displayName = 'Settings03';
