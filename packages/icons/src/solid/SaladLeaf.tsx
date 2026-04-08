import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SaladLeaf = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22.707 21.293-1.414 1.414-2.536-2.536a5 5 0 0 0 1.414-1.414zM7.5 2c1.33 0 2.548.474 3.498 1.259a4.5 4.5 0 0 1 5.765 2.8Q17.124 6 17.5 6a4.5 4.5 0 0 1 4.5 4.5 4.48 4.48 0 0 1-1.491 3.34A5 5 0 0 1 21 16c0 1.02-.306 1.966-.83 2.757l-3.674-3.675.5-4.982-1.991-.2-.336 3.355-5.962-5.962-1.414 1.414 2.75 2.751-2.285.572.484 1.94 3.45-.864 7.065 7.065A5 5 0 0 1 16 21a5 5 0 0 1-2.16-.491A4.48 4.48 0 0 1 10.5 22a4.5 4.5 0 0 1-4.44-5.237 4.5 4.5 0 0 1-2.801-5.765A5.5 5.5 0 0 1 7.5 2"/></svg>
    );
  },
);

SaladLeaf.displayName = 'SaladLeaf';
