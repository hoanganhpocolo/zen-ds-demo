import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Milktea = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 3h-6a1 1 0 0 0-1 1v1h9v2h-1.06l-.766 12.25A4 4 0 0 1 16.182 23H7.818a4 4 0 0 1-3.992-3.75L3.061 7H2V5h9V4a3 3 0 0 1 3-3h6zm-5.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3.5-3.472c2.727.844 4.94-.438 5.726-1.174L18.936 7H13zm-7.702-.783c1.347-.38 3.393-.856 5.702-.043V7H5.064z"/></svg>
    );
  },
);

Milktea.displayName = 'Milktea';
