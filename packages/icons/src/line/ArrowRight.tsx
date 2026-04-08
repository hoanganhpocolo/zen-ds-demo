import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.707 11.293a1 1 0 0 1 0 1.414L12.414 22 11 20.586 18.586 13H2v-2h16.586L11 3.414 12.414 2z"/></svg>
    );
  },
);

ArrowRight.displayName = 'ArrowRight';
