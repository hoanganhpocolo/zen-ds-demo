import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShoppingBag03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.388 2a4 4 0 0 1 3.962 3.45l1.667 12A4 4 0 0 1 19.055 22H4.945a4 4 0 0 1-3.961-4.55l1.667-12A4 4 0 0 1 6.613 2zM7 7a5 5 0 1 0 10 0h-2a3 3 0 0 1-6 0z"/></svg>
    );
  },
);

ShoppingBag03.displayName = 'ShoppingBag03';
