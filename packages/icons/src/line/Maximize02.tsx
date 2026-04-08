import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Maximize02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 18a2 2 0 0 0 2 2h3v2H6a4 4 0 0 1-4-4v-3h2zm18 0a4 4 0 0 1-4 4h-3v-2h3a2 2 0 0 0 2-2v-3h2zM9 4H6a2 2 0 0 0-2 2v3H2V6a4 4 0 0 1 4-4h3zm9-2a4 4 0 0 1 4 4v3h-2V6a2 2 0 0 0-2-2h-3V2z"/></svg>
    );
  },
);

Maximize02.displayName = 'Maximize02';
