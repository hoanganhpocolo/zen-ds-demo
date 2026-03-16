import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudSnowing = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.01 21a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zm-4-2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm8 0a1 1 0 1 1 0 2H16a1 1 0 1 1 0-2zm-4-2a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zm-4-2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm8 0a1 1 0 1 1 0 2H16a1 1 0 1 1 0-2zM12 1c2.735 0 5.079 1.783 5.784 4.26C20.7 5.632 23 8.04 23 11.024c0 2.516-1.657 4.828-4 5.672V14.49c1.189-.713 2-2.043 2-3.466 0-2.069-1.753-3.811-3.998-3.812h-.037a1 1 0 0 1-.995-.871C15.73 4.487 14.07 3 12 3S8.27 4.487 8.03 6.34a1 1 0 0 1-.995.87h-.037C4.754 7.213 3 8.955 3 11.024c0 1.423.811 2.753 2 3.466v2.206c-2.343-.844-4-3.156-4-5.672C1 8.04 3.3 5.631 6.216 5.261 6.92 2.783 9.266 1 12 1"/></svg>
    );
  },
);

CloudSnowing.displayName = 'CloudSnowing';
