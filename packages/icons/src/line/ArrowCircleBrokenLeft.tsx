import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleBrokenLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c3.599 0 6.795 1.73 8.8 4.398L19.2 6.6a9 9 0 1 0 0 10.8l1.6 1.202A10.99 10.99 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1m1.207 7.207L10.414 11H23v2H10.414l2.793 2.793-1.414 1.414-4.5-4.5a1 1 0 0 1 0-1.414l4.5-4.5z"/></svg>
    );
  },
);

ArrowCircleBrokenLeft.displayName = 'ArrowCircleBrokenLeft';
