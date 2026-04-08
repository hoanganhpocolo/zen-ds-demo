import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const HorizontalBarChart01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 2h15a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2.174c.11.313.174.649.174 1v2a3 3 0 0 1-3 3h-2.174c.11.313.174.649.174 1v2a3 3 0 0 1-3 3H4v1H2V1h2zm0 18h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4zm0-6h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4zm0-6h15a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4z"/></svg>
    );
  },
);

HorizontalBarChart01.displayName = 'HorizontalBarChart01';
