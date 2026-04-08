import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const HorizontalBarChart02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 2h5a3 3 0 0 1 3 3v2c0 .351-.063.687-.174 1H14a3 3 0 0 1 3 3v2c0 .351-.063.687-.174 1H19a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H4v1H2V1h2zm0 18h15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4zm0-6h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4zM4 4v4h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

HorizontalBarChart02.displayName = 'HorizontalBarChart02';
