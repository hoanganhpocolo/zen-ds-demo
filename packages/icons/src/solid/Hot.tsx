import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hot = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.906 1.005a1 1 0 0 1 .822.31v.001h.002l.004.006.017.018.063.067.229.252A50 50 0 0 1 17.31 5.69c.892 1.233 1.803 2.632 2.493 4.025.68 1.373 1.197 2.842 1.197 4.19C21 18.917 16.982 23 12 23s-9-4.084-9-9.096c0-1.527.01-5.25 3.2-9.504l.07-.083a1 1 0 0 1 1.437-.025l1.618 1.619 2.831-4.449.068-.092a1 1 0 0 1 .682-.366m-.194 11.853a.898.898 0 0 0-1.424 0C10.401 13.985 9 15.982 9 17.357 9 19.369 10.343 21 12 21s3-1.631 3-3.643c0-1.375-1.401-3.372-2.288-4.5"/></svg>
    );
  },
);

Hot.displayName = 'Hot';
