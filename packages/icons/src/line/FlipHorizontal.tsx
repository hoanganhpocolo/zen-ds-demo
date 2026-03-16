import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FlipHorizontal = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 16v3h-2v-3zm0-5.5v3h-2v-3zM22 5v3h-2V5zm-4 15v2h-3v-2zm0-18v2h-3V2z"/><path fill="currentColor" fillRule="evenodd" d="M2 7a5 5 0 0 1 5-5h4V0h2v24h-2v-2H7a5 5 0 0 1-5-5zm2 10a3 3 0 0 0 3 3h4V4H7a3 3 0 0 0-3 3z" clipRule="evenodd"/></svg>
    );
  },
);

FlipHorizontal.displayName = 'FlipHorizontal';
