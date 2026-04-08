import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pointer = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.484 1.13a.96.96 0 0 1 1.01.026l13.181 8.612a.98.98 0 0 1-.043 1.667l-3.468 2.014 4.069 4.317a.985.985 0 0 1-.22 1.521l-6.191 3.583a.96.96 0 0 1-.842.06.98.98 0 0 1-.57-.63l-1.675-5.697-3.474 2.019a.96.96 0 0 1-.946.01.98.98 0 0 1-.505-.808L5 2.028a.98.98 0 0 1 .484-.897"/></svg>
    );
  },
);

Pointer.displayName = 'Pointer';
