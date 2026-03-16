import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LifeBuoy = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M4.969 6.383A8.96 8.96 0 0 0 3 12a8.96 8.96 0 0 0 1.969 5.616l2.5-2.5A5.47 5.47 0 0 1 6.5 12a5.47 5.47 0 0 1 .969-3.117zm11.561 2.5c.611.886.97 1.96.97 3.117s-.36 2.23-.97 3.116l2.5 2.5A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.97-5.617zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd"/></svg>
    );
  },
);

LifeBuoy.displayName = 'LifeBuoy';
