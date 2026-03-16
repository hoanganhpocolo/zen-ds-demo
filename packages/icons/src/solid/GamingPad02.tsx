import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GamingPad02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 5a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4-4h3v2h-3a2 2 0 0 0-2 2zm-4.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7 12H5v2h2v2h2v-2h2v-2H9v-2H7zm10.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

GamingPad02.displayName = 'GamingPad02';
