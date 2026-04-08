import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Home01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.544 2.144a4 4 0 0 1 4.912 0l6 4.666A4 4 0 0 1 22 9.967V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9.967A4 4 0 0 1 3.544 6.81z"/></svg>
    );
  },
);

Home01.displayName = 'Home01';
