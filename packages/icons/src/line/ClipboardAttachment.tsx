import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClipboardAttachment = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 23H3V1h18zM5 21h14V3h-2v4H7V3H5zm8.5-12a2.5 2.5 0 0 1 2.5 2.5V15a4 4 0 0 1-8 0v-4h2v4a2 2 0 1 0 4 0v-3.5a.5.5 0 0 0-1 0V15h-2v-3.5A2.5 2.5 0 0 1 13.5 9M9 5h6V3H9z"/></svg>
    );
  },
);

ClipboardAttachment.displayName = 'ClipboardAttachment';
