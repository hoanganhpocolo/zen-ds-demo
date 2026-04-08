import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Expand04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.707 14.707 5.414 20H9v2H3a1 1 0 0 1-1-1v-6h2v3.586l5.293-5.293zM20 18.586V15h2v6a1 1 0 0 1-1 1h-6v-2h3.586l-5.293-5.293 1.414-1.414zM9 4H5.414l5.293 5.293-1.414 1.414L4 5.414V9H2V3a1 1 0 0 1 1-1h6zm12-2a1 1 0 0 1 1 1v6h-2V5.414l-5.293 5.293-1.414-1.414L18.586 4H15V2z"/></svg>
    );
  },
);

Expand04.displayName = 'Expand04';
