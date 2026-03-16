import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Dice2 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2V2h20zM4 20h16V4H4zm4.5-6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7-7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
    );
  },
);

Dice2.displayName = 'Dice2';
