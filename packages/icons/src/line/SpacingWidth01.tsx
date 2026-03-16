import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SpacingWidth01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 22H2V2h2zm18 0h-2V2h2zm-3.293-10.707a1 1 0 0 1 0 1.414l-3.5 3.5-1.414-1.414L15.586 13H8.414l1.793 1.793-1.414 1.414-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5 1.414 1.414L8.414 11h7.172l-1.793-1.793 1.414-1.414z"/></svg>
    );
  },
);

SpacingWidth01.displayName = 'SpacingWidth01';
