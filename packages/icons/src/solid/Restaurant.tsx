import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Restaurant = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 11.126c1.725.444 3 2.01 3 3.874v3a4 4 0 0 1-8 0v-3a4 4 0 0 1 3-3.874V2h2zM14 5l.004.154A3 3 0 0 0 16 7.825V2h2v5.825c1.165-.412 2-1.52 2-2.825V2h2v3a5 5 0 0 1-4 4.9V22h-2V9.898a5 5 0 0 1-3.993-4.641L12 5V2h2z"/></svg>
    );
  },
);

Restaurant.displayName = 'Restaurant';
