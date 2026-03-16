import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V13h-2V9.242q-.001-.122-.017-.242H17a4 4 0 0 1-4-4V3.016A2 2 0 0 0 12.758 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5v2H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM22 17l-2.293 2.293L22 21.586 20.586 23l-2.293-2.293L16 23l-1.414-1.414 2.293-2.293L14.586 17 16 15.586l2.293 2.293 2.293-2.293zM15 5a2 2 0 0 0 2 2h.586L15 4.414z"/></svg>
    );
  },
);

FileX.displayName = 'FileX';
