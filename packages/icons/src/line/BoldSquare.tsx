import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BoldSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm7 2a3.5 3.5 0 0 1 2.852 5.53A3.5 3.5 0 0 1 14 18H8.5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM9.5 16H14a1.5 1.5 0 0 0 0-3H9.5zm0-5H13a1.5 1.5 0 0 0 0-3H9.5z"/></svg>
    );
  },
);

BoldSquare.displayName = 'BoldSquare';
