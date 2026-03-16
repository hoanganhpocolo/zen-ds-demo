import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VideoRecorderOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.723 20.973-1.414 1.414-3.28-3.28A3.99 3.99 0 0 1 14 20.5H5a4 4 0 0 1-4-4v-9c0-1.212.54-2.297 1.392-3.03L.863 2.94l1.414-1.414zM14 3.5a4 4 0 0 1 4 4v6.922L7.078 3.5z"/><path fill="currentColor" d="M21.4 8.2A1 1 0 0 1 23 9v6a1 1 0 0 1-1.6.8l-4-3a1 1 0 0 1 0-1.6zM19.666 12 21 13v-2.001z"/></svg>
    );
  },
);

VideoRecorderOff.displayName = 'VideoRecorderOff';
