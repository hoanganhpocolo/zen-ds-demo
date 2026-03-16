import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Percent03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m3.333 9.667a2.667 2.667 0 1 1 0 5.333 2.667 2.667 0 0 1 0-5.333M17.414 8 8 17.414 6.586 16 16 6.586zm-2.081 6.667a.666.666 0 1 0 0 1.332.666.666 0 0 0 0-1.332M8.667 6a2.667 2.667 0 1 1-.001 5.333A2.667 2.667 0 0 1 8.667 6m0 2a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334"/></svg>
    );
  },
);

Percent03.displayName = 'Percent03';
