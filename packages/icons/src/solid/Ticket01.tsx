import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Ticket01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 3a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1h-1a2 2 0 1 0 0 4h1a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1h1a2 2 0 1 0 0-4H2a1 1 0 0 1-1-1V6a3 3 0 0 1 3-3zM9 19h2v-2H9zm0-4h2v-2H9zm0-4h2V9H9zm0-4h2V5H9z"/></svg>
    );
  },
);

Ticket01.displayName = 'Ticket01';
