import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.293 2.293a1 1 0 0 1 1.414 0L22 11.586 20.586 13 13 5.414V22h-2V5.414L3.414 13 2 11.586z"/></svg>
    );
  },
);

ArrowUp.displayName = 'ArrowUp';
