import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tv02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.133 3.274 14.802 6H19a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h4.198l-3.33-2.726 1.265-1.548L12 5.708l4.867-3.982zM5 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11V8zm13 12h1a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1z"/></svg>
    );
  },
);

Tv02.displayName = 'Tv02';
