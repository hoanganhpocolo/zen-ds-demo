import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Car01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.336 3a3 3 0 0 1 2.804 1.932l1.584 4.159A3 3 0 0 1 23 12v5a1 1 0 0 1-1 1h-2v1a3 3 0 1 1-6 0v-1h-4v1a3 3 0 1 1-6 0v-1H2a1 1 0 0 1-1-1v-5a3 3 0 0 1 2.275-2.91L4.86 4.933A3 3 0 0 1 7.664 3zM6 19a1 1 0 1 0 2 0v-1H6zm10 0a1 1 0 1 0 2 0v-1h-2zm-9.5-7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.664 5a1 1 0 0 0-.935.644L5.451 9H18.55l-1.28-3.356A1 1 0 0 0 16.336 5z"/></svg>
    );
  },
);

Car01.displayName = 'Car01';
