import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignTop01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.293 6.293a1 1 0 0 1 1.414 0l6.5 6.5-1.414 1.414L13 9.414V23h-2V9.414l-4.793 4.793-1.414-1.414zM21 3H3V1h18z"/></svg>
    );
  },
);

AlignTop01.displayName = 'AlignTop01';
