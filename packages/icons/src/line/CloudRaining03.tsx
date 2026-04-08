import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudRaining03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.44 14.006 10.273 23l-1.882-.678 3.169-8.994zm5-1.667-3 8.333-1.88-.678 3-8.333zm-8.5 0-2.34 6.5-1.881-.678 2.34-6.5zM12 1c2.735 0 5.079 1.783 5.784 4.26C20.7 5.632 23 8.04 23 11.024 23 13.677 21.58 16 18.7 16l.8-2c1.21.015 1.5-2.116 1.5-2.977 0-2.069-1.753-3.811-3.998-3.812h-.037a1 1 0 0 1-.995-.871C15.73 4.487 14.07 3 12 3S8.27 4.487 8.03 6.34a1 1 0 0 1-.995.87h-.037C4.754 7.213 3 8.955 3 11.024c0 1.01.225 1.771.565 2.25.311.438 1.475.703 2.154.703l-.719 2c-2.735 0-4-2.52-4-4.953C1 8.04 3.3 5.631 6.216 5.261 6.92 2.783 9.266 1 12 1"/></svg>
    );
  },
);

CloudRaining03.displayName = 'CloudRaining03';
