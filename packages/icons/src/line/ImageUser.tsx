import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImageUser = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-8 15a4 4 0 0 0-3.874 3h11.748A4 4 0 0 0 14 17zM6 4a2 2 0 0 0-2 2v12c0 .397.117.765.316 1.076A6 6 0 0 1 10 15h4a6 6 0 0 1 5.683 4.076c.199-.31.317-.68.317-1.076V6a2 2 0 0 0-2-2zm6 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

ImageUser.displayName = 'ImageUser';
