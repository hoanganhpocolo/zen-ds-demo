import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Code01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 6.414 3.414 12 9 17.586 7.586 19l-6.293-6.293a1 1 0 0 1 0-1.414L7.586 5zm13.707 4.879a1 1 0 0 1 0 1.414L16.414 19 15 17.586 20.586 12 15 6.414 16.414 5z"/></svg>
    );
  },
);

Code01.displayName = 'Code01';
