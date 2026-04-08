import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignHorizontalCentre02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 3a3 3 0 0 1 3 3v2a3 3 0 0 1-2.846 2.996L16 11h-3v2h6a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-6v2h-2v-2H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h6v-2H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3V1h2v2zM5 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM8 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8l.102-.005A1 1 0 0 0 17 8V6a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

AlignHorizontalCentre02.displayName = 'AlignHorizontalCentre02';
