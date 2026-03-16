import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Upload01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4.5 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3h2v3a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-3h2zm7.293-15.707a1 1 0 0 1 1.414 0l5.5 5.5-1.414 1.414L13.5 5.414V17h-2V5.414L7.707 9.207 6.293 7.793z"/></svg>
    );
  },
);

Upload01.displayName = 'Upload01';
