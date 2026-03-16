import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BellOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22.713 21.213-1.414 1.414L17.672 19H16a4 4 0 0 1-8 0H3.868c-1.597 0-2.55-1.78-1.664-3.11L4 13.197V9c0-1.085.217-2.12.61-3.062L1.5 2.828l1.414-1.414zM10 19a2 2 0 1 0 4 0zm2-18a8 8 0 0 1 8 8v4.196l1.796 2.695c.383.574.421 1.232.214 1.795l-3.989-3.989A1 1 0 0 1 18 13.5V9a6 6 0 0 0-9.528-4.853L7.045 2.721A7.97 7.97 0 0 1 12 1M6.186 7.514A6 6 0 0 0 6 9v4.5a1 1 0 0 1-.168.555L3.868 17h11.804z"/></svg>
    );
  },
);

BellOff.displayName = 'BellOff';
