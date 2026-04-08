import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Sliders03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.5 13c1.56 0 2.934.794 3.741 2H19.5a2.5 2.5 0 0 1 0 5h-9.259A4.5 4.5 0 1 1 6.5 13m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m11-13a4.5 4.5 0 1 1-3.741 7H4.5a2.5 2.5 0 0 1 0-5h9.259A4.5 4.5 0 0 1 17.5 2m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"/></svg>
    );
  },
);

Sliders03.displayName = 'Sliders03';
