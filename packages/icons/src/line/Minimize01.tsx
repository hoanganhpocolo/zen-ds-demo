import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Minimize01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.448 12.552a1 1 0 0 1 1 1v6.586h-2v-4.172L3.414 22 2 20.585l6.034-6.033H3.862v-2zM22 3.414l-6.034 6.034h4.172v2h-6.586a1 1 0 0 1-1-1V3.861h2v4.173L20.586 2z"/></svg>
    );
  },
);

Minimize01.displayName = 'Minimize01';
