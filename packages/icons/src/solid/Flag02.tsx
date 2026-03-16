import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Flag02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20.086 2c1.782 0 2.674 2.154 1.414 3.414L17.414 9.5l4.086 4.086c1.26 1.26.368 3.414-1.414 3.414H4v5H2V3a1 1 0 0 1 1-1z"/></svg>
    );
  },
);

Flag02.displayName = 'Flag02';
