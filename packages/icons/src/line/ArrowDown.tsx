import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 18.586 20.586 11 22 12.414l-9.293 9.293a1 1 0 0 1-1.414 0L2 12.414 3.414 11 11 18.586V2h2z"/></svg>
    );
  },
);

ArrowDown.displayName = 'ArrowDown';
