import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M9 17a3 3 0 0 0-2.787 1.892A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 5.786-2.11A3 3 0 0 0 15 17zm3-14a9 9 0 0 0-7.24 14.347A5 5 0 0 1 9 15h6c1.787 0 3.354.937 4.238 2.347A9 9 0 0 0 12 3m0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

UserCircle.displayName = 'UserCircle';
