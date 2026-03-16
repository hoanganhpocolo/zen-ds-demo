import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Certificate = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM9 19h6v-2H9zm6.204-12.49c-.871-.893-2.266-.494-3.204.284-.938-.778-2.333-1.177-3.204-.284-.558.572-.807 1.25-.796 1.942.01.672.263 1.314.618 1.87.702 1.096 1.918 2.032 3.124 2.43a.82.82 0 0 0 .516 0c1.206-.398 2.422-1.334 3.124-2.43.355-.556.607-1.198.618-1.87.011-.693-.238-1.37-.796-1.942"/></svg>
    );
  },
);

Certificate.displayName = 'Certificate';
