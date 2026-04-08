import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CircleCut = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12A10.996 10.996 0 0 1 12 1m0 2c-1.053 0-2.063.18-3.002.513A10.98 10.98 0 0 1 13 12c0 3.418-1.559 6.47-4.002 8.487A9 9 0 1 0 12 3M7 4.516A8.99 8.99 0 0 0 3 12a8.99 8.99 0 0 0 4 7.484A8.99 8.99 0 0 0 11 12a8.99 8.99 0 0 0-4-7.484"/></svg>
    );
  },
);

CircleCut.displayName = 'CircleCut';
