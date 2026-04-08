import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Safe = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2v2h-2v-2H9v2H7v-2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm-1 16h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1zM3 16h2v-2H3zm8-8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-8 0h2V8H3z"/></svg>
    );
  },
);

Safe.displayName = 'Safe';
