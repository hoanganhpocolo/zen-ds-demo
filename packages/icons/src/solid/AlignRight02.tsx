import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignRight02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M23 2v20h-2V2zm-7 11a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3zm0-9a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"/></svg>
    );
  },
);

AlignRight02.displayName = 'AlignRight02';
