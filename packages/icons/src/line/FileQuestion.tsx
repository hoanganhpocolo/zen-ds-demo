import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileQuestion = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V19a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.242q-.001-.122-.017-.242H17a4 4 0 0 1-4-4V3.016A2 2 0 0 0 12.758 3zm5 13a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-7a3 3 0 0 1 1 5.828V15h-2v-.5c0-.872.687-1.388 1.248-1.531A1 1 0 1 0 11 12H9a3 3 0 0 1 3-3m3-4a2 2 0 0 0 2 2h.586L15 4.414z"/></svg>
    );
  },
);

FileQuestion.displayName = 'FileQuestion';
