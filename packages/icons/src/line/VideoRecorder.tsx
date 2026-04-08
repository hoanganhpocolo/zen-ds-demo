import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VideoRecorder = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15 3.5c2.273 0 4 1.953 4 4.214v1.981l2.47-1.543A1 1 0 0 1 23 9v6a1.001 1.001 0 0 1-1.53.848L19 14.304v1.982c0 2.261-1.727 4.214-4 4.214H5c-2.273 0-4-1.953-4-4.214V7.714C1 5.453 2.727 3.5 5 3.5zm-10 2c-1.04 0-2 .925-2 2.214v8.572c0 1.289.96 2.214 2 2.214h10c1.04 0 2-.925 2-2.214V7.714c0-1.289-.96-2.214-2-2.214zM19.086 12 21 13.195v-2.391z"/></svg>
    );
  },
);

VideoRecorder.displayName = 'VideoRecorder';
