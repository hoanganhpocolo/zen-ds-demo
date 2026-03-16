import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bicycle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 3a1 1 0 0 1 1 1v3h6.586l2-2H14V3h6a1 1 0 0 1 .707 1.707L17.144 8.27l.594 1.784Q18.112 10 18.5 10a5.5 5.5 0 1 1-2.66.685L15.28 9H8.72l-.562 1.685a5.5 5.5 0 1 1-1.897-.63L7 7.837V5H4V3zm-2.5 9a3.5 3.5 0 1 0 2.009.634l-1.06 3.182a1 1 0 1 1-1.897-.632l1.06-3.181zm12.888.003 1.06 3.18a1 1 0 1 1-1.896.633l-1.062-3.182A3.5 3.5 0 1 0 18.5 12q-.057 0-.112.003"/></svg>
    );
  },
);

Bicycle.displayName = 'Bicycle';
