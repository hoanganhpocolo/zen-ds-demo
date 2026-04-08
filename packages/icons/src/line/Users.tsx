import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Users = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15 13a8 8 0 0 1 8 8 1 1 0 0 1-1 1H2a1 1 0 0 1-1-1 8 8 0 0 1 8-8zm-6 2a6 6 0 0 0-5.917 5h11.834A6 6 0 0 0 9 15m5.292 0a8 8 0 0 1 2.647 5h3.978A6 6 0 0 0 15 15zM15 2a4.75 4.75 0 1 1-2.999 8.43A4.75 4.75 0 1 1 12 3.069 4.73 4.73 0 0 1 15 2M9 4a2.75 2.75 0 1 0 0 5.5A2.75 2.75 0 0 0 9 4m6 0a2.74 2.74 0 0 0-1.751.628c.196.391.34.813.42 1.257l.01.048a4.8 4.8 0 0 1 0 1.626q-.003.027-.01.055a4.7 4.7 0 0 1-.42 1.256A2.75 2.75 0 1 0 15 4"/></svg>
    );
  },
);

Users.displayName = 'Users';
