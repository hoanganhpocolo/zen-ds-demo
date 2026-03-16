import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MarkerPin01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a9 9 0 0 1 9 9c0 5.4-4.795 9.21-8.293 12.707a1 1 0 0 1-1.414 0C7.795 19.209 3 15.401 3 10a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 4.476 4.109 7.72 7 10.589 2.891-2.87 7-6.113 7-10.589a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

MarkerPin01.displayName = 'MarkerPin01';
