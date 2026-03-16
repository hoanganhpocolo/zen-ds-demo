import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CalendarCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 3h6V1h2v2h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1V1h2zM4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4zm12.39-4.775-3.856 3.67a1.5 1.5 0 0 1-2.068 0L8.01 14.558l1.379-1.449 2.11 2.01 3.51-3.343zM6 5a2 2 0 0 0-2 2v1h16V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

CalendarCheck.displayName = 'CalendarCheck';
