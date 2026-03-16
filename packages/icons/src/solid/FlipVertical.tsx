import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FlipVertical = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M17 2a5 5 0 0 1 5 5v4h2v2h-2v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-4H0v-2h2V7a5 5 0 0 1 5-5zM4 17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4H4z" clipRule="evenodd"/></svg>
    );
  },
);

FlipVertical.displayName = 'FlipVertical';
