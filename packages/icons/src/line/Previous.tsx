import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Previous = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.952 2C17.496 2 22 6.472 22 12s-4.504 10-10.048 10a10.04 10.04 0 0 1-9.21-5.998l1.831-.804a8 8 0 0 0 1.744 2.513A8.04 8.04 0 0 0 11.952 20C16.402 20 20 16.413 20 12s-3.598-8-8.048-8a8.04 8.04 0 0 0-5.625 2.28L4.5 8H7v2H2a1 1 0 0 1-1-1V3.9h2v2.935l1.911-1.969.01-.01A10.04 10.04 0 0 1 11.952 2M10.4 15H9.263v-4.796H9.23L8 11.065V9.94L9.331 9h1.07zm3.2-6q.746 0 1.283.35.54.351.83 1.02.29.664.287 1.611 0 .954-.29 1.63-.287.675-.824 1.033Q14.349 15 13.6 15q-.75-.003-1.288-.36-.537-.355-.828-1.032-.287-.675-.284-1.627 0-.947.287-1.615.291-.667.828-1.015Q12.855 9 13.6 9m0 1.004q-.508 0-.813.495t-.308 1.482q0 .668.137 1.115.14.444.392.668.252.22.592.22.51 0 .815-.5.305-.501.302-1.503 0-.659-.139-1.097-.136-.438-.388-.66a.86.86 0 0 0-.59-.22"/></svg>
    );
  },
);

Previous.displayName = 'Previous';
