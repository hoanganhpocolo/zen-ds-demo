import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClipboardX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm-4.975 11.06-1.974-1.974L8.637 11.5l1.974 1.975L8.637 15.5l1.414 1.414 1.974-2.025L14 16.914l1.414-1.414-1.974-2.025 1.974-1.975L14 10.086zM8 4a2 2 0 0 0 2 2h3.982a2 2 0 0 0 2-1.982L15.991 3H8z"/></svg>
    );
  },
);

ClipboardX.displayName = 'ClipboardX';
