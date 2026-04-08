import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SearchSmall = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.5 2a8.5 8.5 0 0 1 8.5 8.5 8.46 8.46 0 0 1-1.826 5.26l5.033 5.033-1.414 1.414-5.033-5.033A8.46 8.46 0 0 1 10.5 19a8.5 8.5 0 0 1 0-17m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"/></svg>
    );
  },
);

SearchSmall.displayName = 'SearchSmall';
