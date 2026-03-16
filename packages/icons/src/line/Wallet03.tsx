import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wallet03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v1.536A4 4 0 0 1 22 10v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V5a3 3 0 0 1 3-3zM4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H4zm12.5-8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5 4a1 1 0 0 0-1 1v1h14V5a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

Wallet03.displayName = 'Wallet03';
