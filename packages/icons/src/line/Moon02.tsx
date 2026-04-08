import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Moon02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.97 1.004a1.002 1.002 0 0 1 .591 1.869 7.014 7.014 0 1 0 9.565 9.567 1.002 1.002 0 0 1 1.87.59C22.463 18.626 17.754 23 12.022 23 5.935 23 1 18.065 1 11.977 1 6.244 5.376 1.535 10.97 1.004M7.329 4.276a9.019 9.019 0 1 0 12.396 12.396A9.018 9.018 0 0 1 7.329 4.276"/></svg>
    );
  },
);

Moon02.displayName = 'Moon02';
