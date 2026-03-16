import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CodeSquare02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-4.207 9.707L16.086 14l-2.293 2.293 1.414 1.414 3-3a1 1 0 0 0 0-1.414l-3-3zm-8-2.414a1 1 0 0 0 0 1.414l3 3 1.414-1.414L7.914 10l2.293-2.293-1.414-1.414z"/></svg>
    );
  },
);

CodeSquare02.displayName = 'CodeSquare02';
