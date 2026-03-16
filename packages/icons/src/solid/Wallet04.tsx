import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wallet04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.206 3.005A4 4 0 0 1 21 7v1.536a3.997 3.997 0 0 1 0 6.927V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12zM16 10a2 2 0 1 0 0 4h3a2 2 0 1 0 0-4z"/></svg>
    );
  },
);

Wallet04.displayName = 'Wallet04';
