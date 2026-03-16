import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImageUserX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M23 16.414 20.414 19 23 21.586 21.586 23 19 20.414 16.414 23 15 21.586 17.586 19 15 16.414 16.414 15 19 17.586 21.586 15zM18 2a4 4 0 0 1 4 4v6h-3a6.99 6.99 0 0 0-5.743 3H10a5 5 0 0 0-5 5h7v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

ImageUserX.displayName = 'ImageUserX';
