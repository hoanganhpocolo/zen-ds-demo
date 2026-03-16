import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VideoRecorder = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 3.5a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4z"/><path fill="currentColor" d="M21.4 8.2A1 1 0 0 1 23 9v6a1 1 0 0 1-1.6.8l-4-3a1 1 0 0 1 0-1.6zM19.666 12 21 13v-2.001z"/></svg>
    );
  },
);

VideoRecorder.displayName = 'VideoRecorder';
