import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Boxing = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 2a5 5 0 0 1 5 5 4.99 4.99 0 0 1-2 3.996V14a5 5 0 0 1-3 4.583V22a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3.418a5 5 0 0 1-2.993-4.325L2 14V7a5 5 0 0 1 5-5zM7 21h8v-2H7zM7 4a3 3 0 0 0-3 3h4c1.306 0 2.414.835 2.826 2H16v2h-5a3 3 0 0 1-3 3H6v-2h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H4v5l.004.154A3 3 0 0 0 7 17h8a3 3 0 0 0 3-3v-3.537a1 1 0 0 1 .499-.865A3 3 0 0 0 17 4z"/></svg>
    );
  },
);

Boxing.displayName = 'Boxing';
