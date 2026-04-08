import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TrendUp01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 7a1 1 0 0 1 1 1v7h-2v-4.586l-7.292 7.293a1 1 0 0 1-1.415 0L7.5 13.914 3.414 18 2 16.586l4.793-4.793a1 1 0 0 1 1.415 0L12 15.586 18.586 9H14V7z"/></svg>
    );
  },
);

TrendUp01.displayName = 'TrendUp01';
