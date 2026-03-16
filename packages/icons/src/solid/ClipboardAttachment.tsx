import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClipboardAttachment = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm-3.5 8a2.5 2.5 0 0 0-2.5 2.5V15h2v-3.5a.5.5 0 0 1 1 0V15a2 2 0 1 1-4 0v-4H8v4a4 4 0 0 0 8 0v-3.5A2.5 2.5 0 0 0 13.5 9M8 4a2 2 0 0 0 2 2h3.982a2 2 0 0 0 2-1.982L15.991 3H8z"/></svg>
    );
  },
);

ClipboardAttachment.displayName = 'ClipboardAttachment';
