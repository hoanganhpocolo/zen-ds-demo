import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImageUserRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22.707 17.793a1 1 0 0 1 0 1.414L18.914 23 17.5 21.586l2.086-2.086h-4.5v-2h4.5L17.5 15.414 18.914 14zM18 2a4 4 0 0 1 4 4v6h-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 .397.117.765.316 1.076A6 6 0 0 1 10 15h2v2h-2a4 4 0 0 0-3.874 3H12v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-6 3.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

ImageUserRight.displayName = 'ImageUserRight';
