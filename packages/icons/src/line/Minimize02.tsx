import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Minimize02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5 15a4 4 0 0 1 4 4v3H7v-3a2 2 0 0 0-2-2H2v-2zm17 2h-3a2 2 0 0 0-2 2v3h-2v-3a4 4 0 0 1 4-4h3zM9 5a4 4 0 0 1-4 4H2V7h3a2 2 0 0 0 2-2V2h2zm8 0a2 2 0 0 0 2 2h3v2h-3a4 4 0 0 1-4-4V2h2z"/></svg>
    );
  },
);

Minimize02.displayName = 'Minimize02';
