import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FlipHorizontal = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M2 7a5 5 0 0 1 5-5h4V0h2v2h4a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-4v2h-2v-2H7a5 5 0 0 1-5-5zm15 13a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-4v16z" clipRule="evenodd"/></svg>
    );
  },
);

FlipHorizontal.displayName = 'FlipHorizontal';
