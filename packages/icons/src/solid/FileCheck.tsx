import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V14h-5a5 5 0 0 0-5 5v4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM23 17.414l-5.293 5.293a1 1 0 0 1-1.414 0L13 19.414 14.414 18 17 20.586 21.586 16zM14 6a2 2 0 0 0 2 2h2.565a2 2 0 0 0-.15-.172l-4.243-4.242A2 2 0 0 0 14 3.434z"/></svg>
    );
  },
);

FileCheck.displayName = 'FileCheck';
