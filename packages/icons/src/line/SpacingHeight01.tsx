import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SpacingHeight01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2v-2h20zM11.293 5.293a1 1 0 0 1 1.414 0l3.5 3.5-1.414 1.414L13 8.414v7.172l1.793-1.793 1.414 1.414-3.5 3.5a1 1 0 0 1-1.414 0l-3.5-3.5 1.414-1.414L11 15.586V8.414l-1.793 1.793-1.414-1.414zM22 4H2V2h20z"/></svg>
    );
  },
);

SpacingHeight01.displayName = 'SpacingHeight01';
