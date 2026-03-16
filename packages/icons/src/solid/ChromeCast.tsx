import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChromeCast = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3 19a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-1-4a6 6 0 0 1 6 6H6a4 4 0 0 0-4-4zm0-4c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8zm16-8a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4C14 14.373 8.627 9 2 9V7a4 4 0 0 1 4-4z"/></svg>
    );
  },
);

ChromeCast.displayName = 'ChromeCast';
