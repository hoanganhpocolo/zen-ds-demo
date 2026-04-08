import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const XSmall = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 6.414 13.414 12 19 17.586 17.586 19 12 13.414 6.414 19 5 17.586 10.586 12 5 6.414 6.414 5 12 10.586 17.586 5z"/></svg>
    );
  },
);

XSmall.displayName = 'XSmall';
