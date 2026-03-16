import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const WifiSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM7.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7 13a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6zm0-4a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10z"/></svg>
    );
  },
);

WifiSquare.displayName = 'WifiSquare';
