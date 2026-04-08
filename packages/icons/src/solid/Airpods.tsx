import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Airpods = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.167 3a5.167 5.167 0 0 1 5.166 5.167v10.166a2.667 2.667 0 1 1-5.333 0v-5.002A5.167 5.167 0 0 1 6.167 3m11.666 0A5.167 5.167 0 0 1 18 13.331v5.002a2.667 2.667 0 0 1-5.333 0V8.167A5.167 5.167 0 0 1 17.833 3"/></svg>
    );
  },
);

Airpods.displayName = 'Airpods';
