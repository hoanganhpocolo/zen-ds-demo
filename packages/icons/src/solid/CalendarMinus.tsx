import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CalendarMinus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 3h6V1h2v2h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1V1h2zM8 16h8v-2H8zM6 5a2 2 0 0 0-2 2v2h16V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

CalendarMinus.displayName = 'CalendarMinus';
