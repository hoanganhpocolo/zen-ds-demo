import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Upload04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 .999c6.067 0 11 4.88 11 10.917 0 4.138-2.32 7.734-5.728 9.584-1.617.877-3.258.523-4.43-.469C11.708 20.07 11 18.518 11 16.875V9.358l-2.796 2.773-1.408-1.42 4.5-4.463a1 1 0 0 1 1.408 0l4.5 4.463-1.408 1.42L13 9.358v7.517c0 1.096.48 2.074 1.136 2.63.62.525 1.376.674 2.181.237C19.113 18.225 21 15.286 21 11.916 21 6.999 16.978 3 12 3s-9 4-9 8.916c0 3.475 2.007 6.493 4.947 7.965l-.894 1.788C3.468 19.874 1 16.184 1 11.916 1 5.879 5.933.999 12 .999"/></svg>
    );
  },
);

Upload04.displayName = 'Upload04';
