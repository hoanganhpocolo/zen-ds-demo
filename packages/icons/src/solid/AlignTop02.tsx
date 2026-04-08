import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignTop02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm9 0a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm5-4v2H2V1z"/></svg>
    );
  },
);

AlignTop02.displayName = 'AlignTop02';
