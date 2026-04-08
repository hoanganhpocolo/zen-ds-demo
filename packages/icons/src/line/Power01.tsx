import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Power01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.332 5.889a8 8 0 1 0 7.348.006l.922-1.776A10 10 0 0 1 22 13c0 5.523-4.477 10-10 10S2 18.523 2 13a10 10 0 0 1 5.414-8.889zM13 13h-2V2h2z"/></svg>
    );
  },
);

Power01.displayName = 'Power01';
