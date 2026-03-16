import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileDoc = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V19a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.242q-.001-.122-.017-.242H17a4 4 0 0 1-4-4V3.016A2 2 0 0 0 12.758 3zm7 15H7v-2h7zm3-4H7v-2h10zm-6-4H7V8h4zm4-5a2 2 0 0 0 2 2h.586L15 4.414z"/></svg>
    );
  },
);

FileDoc.displayName = 'FileDoc';
