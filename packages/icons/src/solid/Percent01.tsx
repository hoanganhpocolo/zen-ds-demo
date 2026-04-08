import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Percent01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 4.5 4.407 21 3 19.586l16.593-16.5zm-3.977 8.18c2.15 0 3.89 1.75 3.891 3.91s-1.742 3.91-3.89 3.91c-2.15 0-3.892-1.75-3.892-3.91s1.742-3.91 3.891-3.91M7.43 3c2.149 0 3.891 1.75 3.891 3.91s-1.742 3.91-3.891 3.91-3.892-1.75-3.892-3.91S5.28 3 7.43 3"/></svg>
    );
  },
);

Percent01.displayName = 'Percent01';
