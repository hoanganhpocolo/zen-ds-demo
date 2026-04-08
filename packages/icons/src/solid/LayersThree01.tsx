import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LayersThree01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22 17.7-8.58 4.086a4 4 0 0 1-3.44 0L2 17.986V15.77l8.84 4.21a2 2 0 0 0 1.72 0L22 15.483zm0-4.5-8.58 4.086a4 4 0 0 1-3.44 0L2 13.486V11.27l8.84 4.21a2 2 0 0 0 1.72 0L22 10.983zM10.28 2.208a4 4 0 0 1 3.44 0l7.314 3.483c1.52.724 1.52 2.888 0 3.612l-7.314 3.483a4 4 0 0 1-3.44 0L2.966 9.303c-1.52-.724-1.52-2.887 0-3.612z"/></svg>
    );
  },
);

LayersThree01.displayName = 'LayersThree01';
