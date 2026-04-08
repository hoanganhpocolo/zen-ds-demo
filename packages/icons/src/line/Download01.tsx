import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Download01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3h2v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3h2z"/><path fill="currentColor" d="m13 12.586 4-4L18.414 10l-5.707 5.707a1 1 0 0 1-1.414 0L5.586 10 7 8.586l4 4V3h2z"/></svg>
    );
  },
);

Download01.displayName = 'Download01';
