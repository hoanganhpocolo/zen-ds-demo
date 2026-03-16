import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Coins = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.5 1a8.5 8.5 0 0 1 2.968 16.464A8.5 8.5 0 1 1 6.534 6.532 8.5 8.5 0 0 1 14.5 1m0 2a6.5 6.5 0 0 0-5.488 3.015Q9.254 6 9.5 6a8.5 8.5 0 0 1 8.485 8.984A6.5 6.5 0 0 0 14.5 3"/></svg>
    );
  },
);

Coins.displayName = 'Coins';
