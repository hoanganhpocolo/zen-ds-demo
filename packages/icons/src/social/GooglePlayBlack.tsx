import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GooglePlayBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m6.071 2.009 9.302 5.33-4.114 4.053-8.514-8.384a2.35 2.35 0 0 1 2.12-1.328 2.4 2.4 0 0 1 1.206.329M2.523 3.997v16.002l8.123-8.004zm8.736 8.602-8.515 8.39a2.35 2.35 0 0 0 3.295 1.014l9.358-5.33zm4.92 3.637L20 14.054a2.29 2.29 0 0 0 0-4.058h.013l-3.866-2.214-4.275 4.213z"/></svg>
    );
  },
);

GooglePlayBlack.displayName = 'GooglePlayBlack';
