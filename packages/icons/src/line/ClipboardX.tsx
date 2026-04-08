import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClipboardX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2v1a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm8.414 8.5-1.974 1.975 1.974 2.025L14 16.914l-1.975-2.025-1.974 2.025L8.637 15.5l1.974-2.025L8.637 11.5l1.414-1.414 1.974 1.974L14 10.087zM9 4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3H9z"/></svg>
    );
  },
);

ClipboardX.displayName = 'ClipboardX';
