import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Browser = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM6.293 13.793a1 1 0 0 0 0 1.414l3 3 1.414-1.414L8.414 14.5l2.293-2.293-1.414-1.414zm7-1.586 2.293 2.293-2.293 2.293 1.414 1.414 3-3a1 1 0 0 0 0-1.414l-3-3zM6 4a2 2 0 0 0-2 2v2h16V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Browser.displayName = 'Browser';
