import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClipboardCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm-5.5 13.586-2.293-2.293-1.414 1.414 3 3a1 1 0 0 0 1.414 0l4.5-4.5-1.414-1.414zM8 4a2 2 0 0 0 2 2h3.982a2 2 0 0 0 2-1.982L15.991 3H8z"/></svg>
    );
  },
);

ClipboardCheck.displayName = 'ClipboardCheck';
