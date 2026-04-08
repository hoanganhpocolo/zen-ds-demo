import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 16H8a5 5 0 0 0-5 5h11v2H3a2 2 0 0 1-2-2 7 7 0 0 1 7-7h6zm4.293-1.207a1 1 0 0 1 1.414 0L23 18.086 21.586 19.5 20 17.914V22h-2v-4.086L16.414 19.5 15 18.086zM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

UserUp.displayName = 'UserUp';
