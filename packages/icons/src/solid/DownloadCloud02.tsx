import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const DownloadCloud02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m13 19.586 2-2L16.414 19l-3.707 3.707a1 1 0 0 1-1.414 0L7.586 19 9 17.586l2 2V13h2zM9 1a8 8 0 0 1 6.977 4.088A6 6 0 1 1 15 16.658V13a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4A8 8 0 1 1 9 1"/></svg>
    );
  },
);

DownloadCloud02.displayName = 'DownloadCloud02';
