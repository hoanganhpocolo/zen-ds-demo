import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Star01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.205 2.884c.733-1.49 2.857-1.49 3.59 0l2.269 4.614 5.082.742c1.638.24 2.292 2.25 1.109 3.408l-3.682 3.602.87 5.082c.279 1.635-1.438 2.88-2.905 2.105L12 20.044l-4.538 2.395c-1.467.773-3.184-.471-2.904-2.106l.868-5.082-3.68-3.602C.561 10.491 1.215 8.48 2.853 8.24l5.082-.742z"/></svg>
    );
  },
);

Star01.displayName = 'Star01';
