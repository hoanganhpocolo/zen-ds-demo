import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Share02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.138 3.26C10.17 1.52 12.26.65 13.52 1.853l8.709 8.334a2.5 2.5 0 0 1-.01 3.622L13.42 22.13c-1.275 1.206-3.374.302-3.374-1.453V17h-2.36c-1.935 0-3.74.974-4.804 2.59a1 1 0 0 1-1.835-.55V15a8 8 0 0 1 8-8h1.018z"/></svg>
    );
  },
);

Share02.displayName = 'Share02';
