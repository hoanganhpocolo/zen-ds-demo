import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bell02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.732 5.402a8 8 0 0 1 13.856 8l-2.098 3.635.208 3.23c.103 1.595-1.613 2.66-2.996 1.861l-1.846-1.066a4 4 0 1 1-6.928-4h-.001l-5.309-3.066c-1.383-.798-1.318-2.816.114-3.524l2.902-1.436zm1.927 12.66a2 2 0 0 0 3.464 2z"/></svg>
    );
  },
);

Bell02.displayName = 'Bell02';
