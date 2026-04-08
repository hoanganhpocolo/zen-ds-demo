import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.5 14v2H8a5 5 0 0 0-5 5h11.5v2H3a2 2 0 0 1-2-2 7 7 0 0 1 7-7zm7.207 1.207L18.914 17H23v2h-4.086l1.793 1.793-1.414 1.414-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5zM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

UserLeft.displayName = 'UserLeft';
