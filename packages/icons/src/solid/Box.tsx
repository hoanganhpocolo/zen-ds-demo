import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Box = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-8a2 2 0 0 1-1.99-1.796L1 8V4a2 2 0 0 1 2-2zM8 17h8v-2H8zM3 8h18V4H3z"/></svg>
    );
  },
);

Box.displayName = 'Box';
