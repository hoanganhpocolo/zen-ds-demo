import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LineHeight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 22H3v-2h18zM12 5.5a1 1 0 0 1 .903.57l5 10.5-1.806.86L14.464 14H9.536l-1.633 3.43-1.806-.86 5-10.5A1 1 0 0 1 12 5.5M10.488 12h3.024L12 8.826zM21 4H3V2h18z"/></svg>
    );
  },
);

LineHeight.displayName = 'LineHeight';
