import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClipboardPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm-6 12H8.5v2H11v2.5h2V15h2.5v-2H13v-2.5h-2zM8 4a2 2 0 0 0 2 2h3.982a2 2 0 0 0 2-1.982L15.991 3H8z"/></svg>
    );
  },
);

ClipboardPlus.displayName = 'ClipboardPlus';
