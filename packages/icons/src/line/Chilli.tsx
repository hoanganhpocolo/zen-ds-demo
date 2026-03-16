import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Chilli = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 3h-3a1 1 0 0 0-1 1v.208c2.308.653 4 2.774 4 5.292v1.558c0 9.296-10.18 15.004-18.111 10.157l-1.41-.861a1.001 1.001 0 0 1 .115-1.768l5.22-2.32A5.36 5.36 0 0 0 11 11.364V9.5a5.5 5.5 0 0 1 5-5.477V4a3 3 0 0 1 3-3h3zm-8.964 6q-.035.245-.036.5v1.864a7.36 7.36 0 0 1-4.373 6.73l-3.475 1.544C11.718 23.435 20 18.706 20 11.058V9.5q0-.255-.036-.5zM16.5 6c-.953 0-1.817.382-2.448 1h4.896A3.5 3.5 0 0 0 16.5 6"/></svg>
    );
  },
);

Chilli.displayName = 'Chilli';
