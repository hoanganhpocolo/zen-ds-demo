import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SaladLeaf = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.5 2c1.33 0 2.548.474 3.498 1.259a4.5 4.5 0 0 1 5.765 2.8Q17.124 6 17.5 6a4.5 4.5 0 0 1 4.5 4.5 4.48 4.48 0 0 1-1.491 3.34A5 5 0 0 1 21 16c0 1.02-.306 1.966-.83 2.757l2.537 2.536-1.414 1.414-2.536-2.536A5 5 0 0 1 16 21a5 5 0 0 1-2.16-.491A4.48 4.48 0 0 1 10.5 22a4.5 4.5 0 0 1-4.44-5.237 4.5 4.5 0 0 1-2.801-5.765A5.5 5.5 0 0 1 7.5 2m0 2a3.5 3.5 0 0 0-2.379 6.065 1 1 0 0 1 .193 1.221 2.5 2.5 0 0 0 2.07 3.71 1 1 0 0 1 .856 1.43 2.5 2.5 0 0 0 4.454 2.271l.057-.092a1 1 0 0 1 1.429-.222 2.98 2.98 0 0 0 3.11.321l-5.598-5.598-3.45.864-.484-1.94 2.286-.572-2.751-2.751 1.414-1.414 5.962 5.962.336-3.355 1.99.2-.499 4.982 2.208 2.208a2.98 2.98 0 0 0-.321-3.11 1.002 1.002 0 0 1 .314-1.486 2.5 2.5 0 0 0-2.271-4.454 1 1 0 0 1-1.43-.856 2.5 2.5 0 0 0-3.71-2.07 1 1 0 0 1-1.22-.193A3.5 3.5 0 0 0 7.5 4"/></svg>
    );
  },
);

SaladLeaf.displayName = 'SaladLeaf';
