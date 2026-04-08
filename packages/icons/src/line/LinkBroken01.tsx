import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LinkBroken01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.202 22h-2v-2.913h2zm-8.547-9.846-2.249 2.25a3.241 3.241 0 0 0 4.584 4.583l2.25-2.25 1.413 1.415-2.249 2.25a5.242 5.242 0 0 1-7.412-7.413l2.25-2.25zm13.325 7.504-1.415 1.414-2.25-2.249 1.415-1.415zM22 16.202h-3.006v-2H22zm-9.01-12.21a5.241 5.241 0 1 1 7.411 7.412l-2.25 2.25-1.414-1.415 2.25-2.249a3.242 3.242 0 0 0-4.584-4.584l-2.25 2.25L10.74 6.24zM5.006 9.798H2v-2h3.006zm1.679-4.62L5.27 6.592l-2.25-2.25 1.415-1.414zm3.113-.265h-2V2h2z"/></svg>
    );
  },
);

LinkBroken01.displayName = 'LinkBroken01';
