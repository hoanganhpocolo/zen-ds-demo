import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowsLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m8.207 14-2.793 2.793H22v2H5.414l2.793 2.793L6.793 23l-4.5-4.5a1 1 0 0 1 0-1.414l4.5-4.5zm6-11.586-2.793 2.793H22v2H11.414L14.207 10l-1.414 1.414-4.5-4.5a1 1 0 0 1 0-1.414l4.5-4.5z"/></svg>
    );
  },
);

ArrowsLeft.displayName = 'ArrowsLeft';
