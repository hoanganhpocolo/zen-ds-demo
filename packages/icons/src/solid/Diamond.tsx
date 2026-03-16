import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Diamond = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.142 2a3 3 0 0 1 2.175.934l3.87 4.075a3 3 0 0 1 .112 4.008L13.525 21.35a2 2 0 0 1-3.05 0L1.7 11.017a3 3 0 0 1 .113-4.008l3.87-4.075A3 3 0 0 1 7.86 2zM12 18.4l3.501-8.4H8.5zM8.618 8h6.764l-2-4h-2.764z"/></svg>
    );
  },
);

Diamond.displayName = 'Diamond';
