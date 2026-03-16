import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Expand03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.707 14.707 5.414 20H9v2H3a1 1 0 0 1-1-1v-6h2v3.586l5.293-5.293zM22 18a4 4 0 0 1-4 4h-3v-2h3a2 2 0 0 0 2-2v-3h2zM21 2a1 1 0 0 1 1 1v6h-2V5.414l-5.293 5.293-1.414-1.414L18.586 4H15V2zM9 4H6a2 2 0 0 0-2 2v3H2V6a4 4 0 0 1 4-4h3z"/></svg>
    );
  },
);

Expand03.displayName = 'Expand03';
