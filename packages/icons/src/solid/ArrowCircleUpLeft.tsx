import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleUpLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M8.464 7.465a1 1 0 0 0-1 1v6.363h2v-3.95l5.364 5.365 1.414-1.415-5.363-5.363h3.95v-2z"/></svg>
    );
  },
);

ArrowCircleUpLeft.displayName = 'ArrowCircleUpLeft';
