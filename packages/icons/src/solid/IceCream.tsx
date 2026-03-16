import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IceCream = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a6 6 0 0 1 5.915 5H18a5 5 0 0 1 .696 9.95l-1.767 4.421A1 1 0 0 1 16 22H8a1 1 0 0 1-.929-.629l-1.768-4.42A5 5 0 0 1 6 7h.085A6 6 0 0 1 12 2M8.677 20h6.646l1.2-3H7.478zM16 8a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6z"/></svg>
    );
  },
);

IceCream.displayName = 'IceCream';
