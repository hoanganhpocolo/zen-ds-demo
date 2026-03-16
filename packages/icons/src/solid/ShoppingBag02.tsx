import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShoppingBag02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 1a4 4 0 0 1 4 4h.852a4 4 0 0 1 3.968 3.504l1.25 10A4 4 0 0 1 19.102 23H4.898A4 4 0 0 1 .93 18.504l1.25-10A4 4 0 0 1 6.148 5H7a4 4 0 0 1 4-4zM7 9h2V7H7zm8 0h2V7h-2zm-4-6a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

ShoppingBag02.displayName = 'ShoppingBag02';
