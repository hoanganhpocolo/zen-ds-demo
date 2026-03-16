import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowSquareUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-5.293 4.293a1 1 0 0 0-1.414 0l-4.5 4.5 1.414 1.414L11 9.414V17h2V9.414l2.793 2.793 1.414-1.414z"/></svg>
    );
  },
);

ArrowSquareUp.displayName = 'ArrowSquareUp';
