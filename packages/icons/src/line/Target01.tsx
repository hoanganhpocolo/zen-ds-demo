import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Target01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m1 5.444h-2v-3.39A9.004 9.004 0 0 0 3.055 11h3.39v2h-3.39A9.004 9.004 0 0 0 11 20.945v-3.39h2v3.39A9.004 9.004 0 0 0 20.945 13h-3.39v-2h3.39A9.004 9.004 0 0 0 13 3.055z"/></svg>
    );
  },
);

Target01.displayName = 'Target01';
