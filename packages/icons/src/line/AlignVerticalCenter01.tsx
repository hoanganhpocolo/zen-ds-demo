import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignVerticalCenter01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.293 14.793a1 1 0 0 1 1.414 0l4.5 4.5-1.414 1.414L13 17.914V23h-2v-5.086l-2.793 2.793-1.414-1.414zM22 13H2v-2h20zm-9-6.914 2.793-2.793 1.414 1.414-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5 1.414-1.414L11 6.086V1h2z"/></svg>
    );
  },
);

AlignVerticalCenter01.displayName = 'AlignVerticalCenter01';
