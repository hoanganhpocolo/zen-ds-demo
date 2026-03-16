import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowSquareUpLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM8.465 7.465a1 1 0 0 0-1 .999v6.364h2v-3.95l5.363 5.364 1.414-1.414-5.363-5.364h3.95v-2z"/></svg>
    );
  },
);

ArrowSquareUpLeft.displayName = 'ArrowSquareUpLeft';
