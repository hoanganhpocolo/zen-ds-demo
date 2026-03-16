import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignBottom01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 23H3v-2h18zm-8-9.414 4.793-4.793 1.414 1.414-6.5 6.5a1 1 0 0 1-1.414 0l-6.5-6.5 1.414-1.414L11 13.586V1h2z"/></svg>
    );
  },
);

AlignBottom01.displayName = 'AlignBottom01';
