import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Unpin02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.9 20.485 20.484 21.9l-3.227-3.228-.305 1.121c-.404 1.481-2.258 1.973-3.344.887L9.17 16.243l-4.242 4.242-1.414-1.414 4.242-4.243-4.438-4.438c-1.085-1.086-.594-2.94.887-3.345l1.12-.305L2.1 3.515 3.515 2.1zM4.732 8.976l10.29 10.29.606-2.223L6.955 8.37zm7.22-6.123a4 4 0 0 1 6.028-.429l3.593 3.594a4 4 0 0 1-.428 6.028l-2.066 1.55c-.239.18-.432.41-.57.672l-1.445-1.445c.23-.311.502-.592.815-.827l2.065-1.55a2 2 0 0 0 .215-3.014l-3.594-3.593a2 2 0 0 0-3.013.215l-1.55 2.066a4 4 0 0 1-.826.815L9.73 5.49c.262-.138.493-.331.672-.57z"/></svg>
    );
  },
);

Unpin02.displayName = 'Unpin02';
