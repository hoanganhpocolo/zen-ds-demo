import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.394 14a6.996 6.996 0 0 0-2.72 9H4a2 2 0 0 1-2-2 7 7 0 0 1 7-7zm6.313 1.207L18.914 17H23v2h-4.086l1.793 1.793-1.414 1.414-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5zM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/></svg>
    );
  },
);

UserLeft.displayName = 'UserLeft';
