import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GamingPad01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.586 3a6 6 0 0 1 5.954 5.256l1.17 9.372A3 3 0 0 1 20.735 21H20a3 3 0 0 1-2.4-1.2l-1.8-2.4a1 1 0 0 0-.8-.4H9a1 1 0 0 0-.8.4l-1.8 2.4A3 3 0 0 1 4 21h-.734a3 3 0 0 1-2.977-3.372L1.46 8.256A6 6 0 0 1 7.414 3zM7.414 5a4 4 0 0 0-3.97 3.504l-1.17 9.372A1 1 0 0 0 3.265 19H4a1 1 0 0 0 .8-.4l1.8-2.4A3 3 0 0 1 9 15h6a3 3 0 0 1 2.4 1.2l1.8 2.4a1 1 0 0 0 .8.4h.734a1 1 0 0 0 .993-1.124l-1.171-9.372A4 4 0 0 0 16.586 5zM9 9h2v2H9v2H7v-2H5V9h2V7h2zm8.5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
    );
  },
);

GamingPad01.displayName = 'GamingPad01';
