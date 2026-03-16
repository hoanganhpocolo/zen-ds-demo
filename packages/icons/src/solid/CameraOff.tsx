import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CameraOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22.606 21.92-1.414 1.414-1.412-1.412q-.379.077-.78.078H5a4 4 0 0 1-4-4V9a4 4 0 0 1 2.257-3.602l-2.57-2.57L2.1 1.414zM14.764 2a3 3 0 0 1 2.683 1.658l.395.79a1 1 0 0 0 .894.552H19a4 4 0 0 1 4 4v9c0 .446-.075.875-.21 1.275l-5.812-5.812a5 5 0 0 0-5.441-5.441L6.784 3.27A3 3 0 0 1 9.236 2zM7.94 10.082a5 5 0 0 0 6.977 6.977l-1.446-1.447a3 3 0 0 1-4.084-4.084z"/></svg>
    );
  },
);

CameraOff.displayName = 'CameraOff';
