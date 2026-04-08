import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Golf = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a9 9 0 0 1 1 17.942V21h5v2H6v-2h5v-2.058A9 9 0 0 1 12 1m0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Golf.displayName = 'Golf';
