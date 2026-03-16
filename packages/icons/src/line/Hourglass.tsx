import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hourglass = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 3h-2v1.658a6 6 0 0 1-2.16 4.61L13.564 12l3.278 2.732A6 6 0 0 1 19 19.342V21h2v2H3v-2h2v-1.658a6 6 0 0 1 2.16-4.61L10.437 12 7.159 9.268A6 6 0 0 1 5 4.658V3H3V1h18zM8.44 16.269A4 4 0 0 0 7 19.342V21h10v-1.658a4 4 0 0 0-1.44-3.073L12 13.302zM7 4.659c0 1.186.527 2.312 1.44 3.072L12 10.698l3.56-2.967A4 4 0 0 0 17 4.658V3H7z"/></svg>
    );
  },
);

Hourglass.displayName = 'Hourglass';
