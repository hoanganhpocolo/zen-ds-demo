import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VideoRecorderOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.723 20.973-1.414 1.414-2.811-2.81A3.83 3.83 0 0 1 15 20.5H5c-2.273 0-4-1.953-4-4.214V7.714a4.33 4.33 0 0 1 1.416-3.22L.863 2.941l1.414-1.414zM3.839 5.917C3.343 6.307 3 6.945 3 7.714v8.572c0 1.289.96 2.214 2 2.214h10c.383 0 .755-.127 1.072-.35zM15 3.5c2.273 0 4 1.953 4 4.214v1.981l2.47-1.543A1 1 0 0 1 23 9v6a1.001 1.001 0 0 1-1.53.848L19 14.304v1.118l-2-2V7.714c0-1.289-.96-2.214-2-2.214H9.078l-2-2zm4.086 8.5L21 13.195v-2.391z"/></svg>
    );
  },
);

VideoRecorderOff.displayName = 'VideoRecorderOff';
