import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CameraOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22.606 21.92-1.414 1.414-1.412-1.412q-.379.077-.78.078H5a4 4 0 0 1-4-4V9a4 4 0 0 1 2.257-3.602l-2.57-2.57L2.1 1.414zM4.866 7.007A2 2 0 0 0 3 9v9a2 2 0 0 0 2 2h12.858l-2.941-2.941a5 5 0 0 1-6.977-6.977zM14.763 2a3 3 0 0 1 2.683 1.658l.395.79a1 1 0 0 0 .894.552H19a4 4 0 0 1 4 4v9c0 .446-.075.875-.21 1.275L21 17.485V9a2 2 0 0 0-2-2h-.264a3 3 0 0 1-2.683-1.658l-.395-.79A1 1 0 0 0 14.764 4H9.236a1 1 0 0 0-.894.553l-.092.182-1.465-1.464A3 3 0 0 1 9.236 2zm-5.377 9.528a3 3 0 0 0 4.084 4.084zM12 8a5 5 0 0 1 4.977 5.463l-5.44-5.442Q11.765 8 12 8"/></svg>
    );
  },
);

CameraOff.displayName = 'CameraOff';
