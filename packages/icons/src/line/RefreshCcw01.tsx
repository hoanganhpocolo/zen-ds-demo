import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RefreshCcw01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.952 2C17.496 2 22 6.472 22 12s-4.504 10-10.048 10a10.04 10.04 0 0 1-9.21-5.998l1.831-.804a8 8 0 0 0 1.744 2.513A8.04 8.04 0 0 0 11.952 20C16.402 20 20 16.413 20 12s-3.598-8-8.048-8a8.04 8.04 0 0 0-5.625 2.28L4.5 8h3v2H2a1 1 0 0 1-1-1V3.5h2v3.335l1.911-1.969.01-.01A10.04 10.04 0 0 1 11.952 2"/></svg>
    );
  },
);

RefreshCcw01.displayName = 'RefreshCcw01';
