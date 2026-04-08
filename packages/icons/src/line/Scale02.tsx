import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Scale02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 6a1 1 0 0 1 1 1v5h-2V9.413l-3.296 3.296c.187.392.296.828.296 1.291v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h5c.463 0 .899.108 1.29.295L14.586 8H12V6zm1-4a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-2v-2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2H2V6a4 4 0 0 1 4-4zM5 13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

Scale02.displayName = 'Scale02';
