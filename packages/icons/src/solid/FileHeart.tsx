import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileHeart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V11h-7a4 4 0 0 0-4 4v8H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM17.5 13.838a3.11 3.11 0 0 1 4.42.175c1.59 1.702 1.21 3.818.233 5.414-.969 1.583-2.655 2.94-4.326 3.518a1 1 0 0 1-.654 0c-1.67-.577-3.357-1.935-4.326-3.518-.977-1.596-1.358-3.712.233-5.414a3.11 3.11 0 0 1 4.42-.175m2.959 1.54a1.117 1.117 0 0 0-1.675 0l-.553.593a1 1 0 0 1-1.462 0l-.553-.593a1.117 1.117 0 0 0-1.675 0c-.732.783-.714 1.82.012 3.005.668 1.09 1.823 2.06 2.947 2.543 1.124-.483 2.28-1.452 2.947-2.543.726-1.185.744-2.222.012-3.005M14 6a2 2 0 0 0 2 2h2.565a2 2 0 0 0-.15-.172l-4.243-4.242A2 2 0 0 0 14 3.434z"/></svg>
    );
  },
);

FileHeart.displayName = 'FileHeart';
