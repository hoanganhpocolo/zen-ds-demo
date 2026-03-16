import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileAttachment05 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V19a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.242q-.001-.122-.017-.242H17a4 4 0 0 1-4-4V3.016A2 2 0 0 0 12.758 3zm6.5 6a2.5 2.5 0 0 1 2.5 2.5V15a4 4 0 0 1-8 0v-4h2v4a2 2 0 1 0 4 0v-3.5a.5.5 0 0 0-1 0V15h-2v-3.5A2.5 2.5 0 0 1 13.5 9M15 5a2 2 0 0 0 2 2h.586L15 4.414z"/></svg>
    );
  },
);

FileAttachment05.displayName = 'FileAttachment05';
