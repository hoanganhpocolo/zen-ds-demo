import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Chilli = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 3h-3a1 1 0 0 0-1 1v.208c2.308.653 4 2.774 4 5.292v1.558c0 9.296-10.18 15.004-18.111 10.157l-1.41-.861a1.001 1.001 0 0 1 .115-1.768l5.22-2.32A5.36 5.36 0 0 0 11 11.364V9.5a5.5 5.5 0 0 1 5-5.477V4a3 3 0 0 1 3-3h3zm-5.5 3c-.953 0-1.817.382-2.448 1h4.896A3.5 3.5 0 0 0 16.5 6"/></svg>
    );
  },
);

Chilli.displayName = 'Chilli';
