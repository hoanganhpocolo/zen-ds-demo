import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClipboardDownload = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2v1a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm6 12.086 2.5-2.5L16.914 14l-4.207 4.207a1 1 0 0 1-1.414 0L7.086 14 8.5 12.586l2.5 2.5V10.5h2zM9 4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3H9z"/></svg>
    );
  },
);

ClipboardDownload.displayName = 'ClipboardDownload';
