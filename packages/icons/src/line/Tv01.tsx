import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tv01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4.198l3.33 2.726-1.265 1.548L12 18.292l-4.867 3.982-1.266-1.548L9.198 18H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM5 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Tv01.displayName = 'Tv01';
