import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImageCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M8.896 20.45a9 9 0 0 0 11.32-4.778l-4.083-2.859zM12 3a9 9 0 0 0-4.964 16.507l7.645-8.069a2 2 0 0 1 2.6-.263l3.562 2.494A9 9 0 0 0 12 3M9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

ImageCircle.displayName = 'ImageCircle';
