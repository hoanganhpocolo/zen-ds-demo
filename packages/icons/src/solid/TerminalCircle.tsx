import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TerminalCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m1 15h5v-2h-5zM6.293 9.707 8.586 12l-2.293 2.293 1.414 1.414 3-3a1 1 0 0 0 0-1.414l-3-3z"/></svg>
    );
  },
);

TerminalCircle.displayName = 'TerminalCircle';
