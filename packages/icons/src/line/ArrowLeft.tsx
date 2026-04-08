import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 3.414 5.414 11H22v2H5.414L13 20.586 11.586 22l-9.293-9.293a1 1 0 0 1 0-1.414L11.586 2z"/></svg>
    );
  },
);

ArrowLeft.displayName = 'ArrowLeft';
