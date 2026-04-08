import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Boxing = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.5 2a4.5 4.5 0 0 1 2.5 8.24V14a5 5 0 0 1-3 4.583V22a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3.418a5 5 0 0 1-2.993-4.325L2 14V9h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6v2h2a3 3 0 0 0 3-3h5V9h-5.174A3 3 0 0 0 8 7H2q0-.134.009-.264Q2.002 6.626 2 6.5A4.5 4.5 0 0 1 6.5 2zM7 21h8v-2H7z"/></svg>
    );
  },
);

Boxing.displayName = 'Boxing';
