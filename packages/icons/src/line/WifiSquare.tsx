import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const WifiSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm1.5 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7 11a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4zm0-4c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8z"/></svg>
    );
  },
);

WifiSquare.displayName = 'WifiSquare';
