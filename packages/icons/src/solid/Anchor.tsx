import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Anchor = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a3.7 3.7 0 0 1 1 7.264v12.675a8.06 8.06 0 0 0 4.662-2.247c1.25-1.231 2.052-2.934 2.274-4.692H17.4v-2H21a1 1 0 0 1 1 1c0 2.604-1.046 5.258-2.935 7.117A10.07 10.07 0 0 1 12 23a10.07 10.07 0 0 1-7.065-2.883C3.046 18.257 2 15.604 2 13a1 1 0 0 1 1-1h3.6v2H4.063c.223 1.758 1.024 3.461 2.275 4.692A8.06 8.06 0 0 0 11 20.94V8.264A3.7 3.7 0 0 1 12 1"/></svg>
    );
  },
);

Anchor.displayName = 'Anchor';
