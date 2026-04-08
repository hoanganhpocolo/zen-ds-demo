import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FlipVertical = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 22H5v-2h3zm5.5 0h-3v-2h3zm5.5 0h-3v-2h3zM4 18H2v-3h2zm18 0h-2v-3h2z"/><path fill="currentColor" fillRule="evenodd" d="M17 2a5 5 0 0 1 5 5v4h2v2H0v-2h2V7a5 5 0 0 1 5-5zM7 4a3 3 0 0 0-3 3v4h16V7a3 3 0 0 0-3-3z" clipRule="evenodd"/></svg>
    );
  },
);

FlipVertical.displayName = 'FlipVertical';
