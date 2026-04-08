import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowBlockDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.5 2a3 3 0 0 1 3 3v6h1.48c1.656 0 2.595 1.896 1.592 3.212l-5.185 6.806a3 3 0 0 1-4.774 0l-5.185-6.806C3.425 12.896 4.365 11 6.019 11H7.5V5a3 3 0 0 1 3-3zm-3 2a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1H6.02l5.184 6.806c.4.525 1.192.525 1.592 0L17.98 13H15.5a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

ArrowBlockDown.displayName = 'ArrowBlockDown';
