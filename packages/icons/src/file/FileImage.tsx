import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const FileImage = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      <svg ref={ref} {...rest} fill="none" viewBox="0 0 32 40" width={width} height={height}><path fill="#000" fillOpacity=".267" d="M20.378 0c1.28 0 2.492.579 3.303 1.577l7.354 9.06c.624.768.965 1.73.965 2.723V35.7c0 2.375-1.91 4.3-4.267 4.3H4.267C1.91 40 0 38.075 0 35.7V4.3C0 1.925 1.91 0 4.267 0zM11.5 14.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 .893-.135A3 3 0 0 0 23.5 26.5v-9a3 3 0 0 0-3-3zm9 1.5a1.5 1.5 0 0 1 1.5 1.5v5.309l-2.04-1.428a1.5 1.5 0 0 0-1.95.198L11.929 28H11.5a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5zm-7.125 1.5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75"/></svg>
    );
  },
);

FileImage.displayName = 'FileImage';
