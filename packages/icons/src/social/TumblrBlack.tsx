import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TumblrBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.208 22.32c-3.096 0-5.418-1.591-5.418-5.418v-6.106H5.952V7.485c3.096-.817 4.386-3.483 4.558-5.805h3.225v5.246h3.741v3.87h-3.741v5.332c0 1.59.817 2.15 2.107 2.15h1.806v4.042z"/></svg>
    );
  },
);

TumblrBlack.displayName = 'TumblrBlack';
