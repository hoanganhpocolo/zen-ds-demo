import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wallet01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM3 11h5l.099.005a1 1 0 0 1 .608.288L10.414 13h3.172l1.707-1.707.073-.066A1 1 0 0 1 16 11h5V9H3zm2-6a2 2 0 0 0-2 2h18a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Wallet01.displayName = 'Wallet01';
