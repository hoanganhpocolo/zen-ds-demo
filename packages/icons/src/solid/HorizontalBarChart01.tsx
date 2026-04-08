import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const HorizontalBarChart01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4v2h11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4v2h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v1H2V1h2z"/></svg>
    );
  },
);

HorizontalBarChart01.displayName = 'HorizontalBarChart01';
