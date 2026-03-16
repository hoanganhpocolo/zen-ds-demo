import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudRaining04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 23h-2v-3.5h2zm-4-1H7v-3.5h2zm8 0h-2v-3.5h2zM12 1c2.735 0 5.079 1.783 5.784 4.26C20.7 5.632 23 8.04 23 11.024c0 2.946-2.272 5.612-5.256 5.97l-.06.007H6.316l-.06-.007C3.273 16.635 1 13.97 1 11.023 1 8.04 3.3 5.631 6.216 5.261 6.92 2.783 9.266 1 12 1m0 2C9.93 3 8.27 4.487 8.03 6.34a1 1 0 0 1-.995.87h-.037C4.754 7.213 3 8.955 3 11.024 3 12.968 4.516 14.74 6.438 15h11.124C19.484 14.739 21 12.968 21 11.023c0-2.069-1.753-3.811-3.998-3.812h-.037a1 1 0 0 1-.995-.871C15.73 4.487 14.07 3 12 3"/></svg>
    );
  },
);

CloudRaining04.displayName = 'CloudRaining04';
