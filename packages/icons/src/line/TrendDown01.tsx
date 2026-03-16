import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TrendDown01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m8 11.586 3.793-3.793a1 1 0 0 1 1.414 0L20 14.586V10h2v7a1 1 0 0 1-1 1h-7v-2h4.586L12.5 9.914l-3.793 3.793a1 1 0 0 1-1.414 0L2 8.414 3.414 7z"/></svg>
    );
  },
);

TrendDown01.displayName = 'TrendDown01';
