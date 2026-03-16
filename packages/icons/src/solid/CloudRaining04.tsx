import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudRaining04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 23h-2v-3.5h2zm-4-1H7v-3.5h2zm8 0h-2v-3.5h2zM12 1c2.735 0 5.079 1.783 5.784 4.26C20.7 5.632 23 8.04 23 11.024c0 2.946-2.272 5.612-5.256 5.97l-.06.007H6.316l-.06-.007C3.273 16.635 1 13.97 1 11.023 1 8.04 3.3 5.631 6.216 5.261 6.92 2.783 9.266 1 12 1"/></svg>
    );
  },
);

CloudRaining04.displayName = 'CloudRaining04';
