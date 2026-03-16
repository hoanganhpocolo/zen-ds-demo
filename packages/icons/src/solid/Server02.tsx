import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Server02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 13a4 4 0 0 1 0 8H5a4 4 0 0 1 0-8zM6 15.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M19 3a4 4 0 0 1 0 8H5a4 4 0 1 1 0-8zM6 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

Server02.displayName = 'Server02';
