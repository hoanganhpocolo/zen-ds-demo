import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Scan = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 18a2 2 0 0 0 2 2h2v2H6a4 4 0 0 1-4-4v-2h2zm18 0a4 4 0 0 1-4 4h-2v-2h2a2 2 0 0 0 2-2v-2h2zm1-5H1v-2h22zM8 4H6a2 2 0 0 0-2 2v2H2V6a4 4 0 0 1 4-4h2zm10-2a4 4 0 0 1 4 4v2h-2V6a2 2 0 0 0-2-2h-2V2z"/></svg>
    );
  },
);

Scan.displayName = 'Scan';
