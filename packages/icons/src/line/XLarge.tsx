import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const XLarge = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m12 10.586 7.5-7.5L20.914 4.5l-7.5 7.5L21 19.586 19.586 21 12 13.414l-7.5 7.5L3.086 19.5l7.5-7.5L3 4.414 4.414 3z"/></svg>
    );
  },
);

XLarge.displayName = 'XLarge';
