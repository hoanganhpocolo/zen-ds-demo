import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 14v2H8a5 5 0 0 0-5 5h10v2H3a2 2 0 0 1-2-2 7 7 0 0 1 7-7zm10 2.414-2.293 2.293L23 21l-1.414 1.414-2.293-2.293L17 22.414 15.586 21l2.293-2.293-2.293-2.293L17 15l2.293 2.293L21.586 15zM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

UserX.displayName = 'UserX';
