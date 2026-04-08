import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Mail01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.82 1.725a4 4 0 0 1 4.36 0l7 4.55A4 4 0 0 1 23 9.628V19a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9.628a4 4 0 0 1 1.82-3.353zm4.659 13.593a4 4 0 0 1-4.958 0L3 10.169V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.83zm-1.39-11.916a2 2 0 0 0-2.179 0l-7 4.55a2 2 0 0 0-.249.19l7.1 5.605a2 2 0 0 0 2.478 0l7.099-5.604a2 2 0 0 0-.248-.192z"/></svg>
    );
  },
);

Mail01.displayName = 'Mail01';
