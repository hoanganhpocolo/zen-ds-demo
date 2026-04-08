import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 14a6.98 6.98 0 0 1 4.845 1.948l-1.414 1.414A4.98 4.98 0 0 0 14 16H8a5 5 0 0 0-5 5h8.457v2H3a2 2 0 0 1-2-2 7 7 0 0 1 7-7zm9 3.414-5.293 5.293a1 1 0 0 1-1.414 0l-3-3 1.414-1.414L17 20.586 21.586 16zM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

UserCheck.displayName = 'UserCheck';
