import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BoldSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM8.5 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H14a3.5 3.5 0 0 0 1.852-6.47A3.5 3.5 0 0 0 13 6zm5.5 7a1.5 1.5 0 0 1 0 3H9.5v-3zm-1-5a1.5 1.5 0 0 1 0 3H9.5V8z"/></svg>
    );
  },
);

BoldSquare.displayName = 'BoldSquare';
