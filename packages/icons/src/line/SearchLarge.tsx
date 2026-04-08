import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SearchLarge = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.107 1c5.583 0 10.109 4.525 10.109 10.107 0 2.427-.856 4.654-2.28 6.396L23 21.566 21.566 23l-4.063-4.064a10.07 10.07 0 0 1-6.396 2.28C5.525 21.216 1 16.69 1 11.107 1 5.525 5.525 1 11.107 1m0 2.027a8.08 8.08 0 1 0 .001 16.16 8.08 8.08 0 0 0 0-16.16"/></svg>
    );
  },
);

SearchLarge.displayName = 'SearchLarge';
