import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CalendarHeart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 3h6V1h2v2h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1V1h2zm6.204 9.11c-.871-.893-2.266-.493-3.204.285-.938-.778-2.333-1.178-3.204-.286-.559.573-.807 1.25-.796 1.943.01.672.263 1.314.618 1.869.702 1.096 1.918 2.032 3.124 2.432a.82.82 0 0 0 .516 0c1.206-.4 2.422-1.336 3.124-2.432.355-.555.607-1.197.618-1.87.011-.692-.237-1.37-.796-1.942M6 5a2 2 0 0 0-2 2v2h16V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

CalendarHeart.displayName = 'CalendarHeart';
