import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Repeat01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 15a4 4 0 0 1-4 4H5.414L8 21.586 6.586 23l-4.293-4.293a1 1 0 0 1 0-1.414L6.586 13 8 14.414 5.414 17H18a2 2 0 0 0 2-2v-2h2zm-.293-9.707a1 1 0 0 1 0 1.414L17.414 11 16 9.586 18.586 7H6a2 2 0 0 0-2 2v2H2V9a4 4 0 0 1 4-4h12.586L16 2.414 17.414 1z"/></svg>
    );
  },
);

Repeat01.displayName = 'Repeat01';
