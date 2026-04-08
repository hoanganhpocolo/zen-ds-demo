import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowBlockUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.613 2.982a3 3 0 0 1 4.774 0l5.185 6.806c1.003 1.316.064 3.212-1.591 3.212H16.5v6a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-6H6.02c-1.655 0-2.595-1.896-1.592-3.212z"/></svg>
    );
  },
);

ArrowBlockUp.displayName = 'ArrowBlockUp';
