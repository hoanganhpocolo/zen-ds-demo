import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const FileVideo = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      <svg ref={ref} {...rest} fill="none" viewBox="0 0 32 40" width={width} height={height}><path fill="#000" fillOpacity=".267" d="M20.378 0c1.28 0 2.492.579 3.303 1.577l7.354 9.06c.624.768.965 1.73.965 2.723V35.7c0 2.375-1.91 4.3-4.267 4.3H4.267C1.91 40 0 38.075 0 35.7V4.3C0 1.925 1.91 0 4.267 0zM10.75 16.125a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h6.75a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3zm13.5 4.227a.75.75 0 0 0-1.23-.577l-1.02.85v3.75l1.02.85a.75.75 0 0 0 1.23-.576z"/></svg>
    );
  },
);

FileVideo.displayName = 'FileVideo';
