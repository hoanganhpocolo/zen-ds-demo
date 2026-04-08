import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Glasses02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 6h-.459a2 2 0 0 0-1.973 1.67l-.45 2.696a5 5 0 0 1 6.54 2.817 5 5 0 0 1 2.683 0 5 5 0 0 1 6.54-2.817l-.45-2.695A2 2 0 0 0 17.46 6H17V4h.459a4 4 0 0 1 3.945 3.343l.834 5.005a5 5 0 1 1-9.234 2.827 3 3 0 0 0-2.009-.001A4.998 4.998 0 0 1 1 15c0-.974.279-1.884.76-2.652l.836-5.005A4 4 0 0 1 6.54 4H7z"/></svg>
    );
  },
);

Glasses02.displayName = 'Glasses02';
