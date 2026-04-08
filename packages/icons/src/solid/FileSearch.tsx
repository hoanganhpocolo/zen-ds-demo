import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileSearch = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.691 15a3.692 3.692 0 0 1 3.221 5.498L23 22.586 21.586 24l-2.088-2.088A3.692 3.692 0 1 1 17.691 15M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V13h-5a5 5 0 0 0-5 5v5H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm4.933 16a1.692 1.692 0 1 0 0 3.383 1.692 1.692 0 0 0 0-3.383M14 6a2 2 0 0 0 2 2h2.565a2 2 0 0 0-.15-.172l-4.243-4.242A2 2 0 0 0 14 3.434z"/></svg>
    );
  },
);

FileSearch.displayName = 'FileSearch';
