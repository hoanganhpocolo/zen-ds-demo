import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Youtube = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.656 3.049a27.3 27.3 0 0 1 10.688 0A7.04 7.04 0 0 1 23 9.949v4.102a7.04 7.04 0 0 1-5.656 6.9c-3.528.706-7.16.706-10.688 0A7.04 7.04 0 0 1 1 14.051V9.949a7.04 7.04 0 0 1 5.656-6.9m10.295 1.96a25.3 25.3 0 0 0-9.902 0A5.04 5.04 0 0 0 3 9.95v4.102a5.04 5.04 0 0 0 4.049 4.94 25.3 25.3 0 0 0 9.902 0A5.04 5.04 0 0 0 21 14.05V9.949a5.04 5.04 0 0 0-4.049-4.94M8.5 9.79c0-1.564 1.715-2.524 3.048-1.704l3.593 2.21c1.268.782 1.268 2.626 0 3.407l-3.593 2.211c-1.333.82-3.048-.14-3.048-1.704zm2 4.42L14.092 12 10.5 9.79z"/></svg>
    );
  },
);

Youtube.displayName = 'Youtube';
