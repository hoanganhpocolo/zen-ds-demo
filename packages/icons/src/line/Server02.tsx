import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Server02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 3a5 5 0 0 1 3 9 5 5 0 0 1-3 9H6a5 5 0 0 1-3-9 5 5 0 0 1 3-9zM6 13a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6zm1 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M6 5a3 3 0 0 0 0 6h12a3 3 0 1 0 0-6zm1 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
    );
  },
);

Server02.displayName = 'Server02';
