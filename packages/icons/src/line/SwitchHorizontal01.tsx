import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SwitchHorizontal01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m6.425 13.034-2.108 2.297H22v2H4.317l2.108 2.297L4.97 21l-3.697-3.983a1 1 0 0 1 0-1.371l3.697-3.984zm16.303-7.05a1 1 0 0 1 0 1.37l-3.699 3.984-1.455-1.372 2.109-2.297H2v-2h17.683l-2.109-2.297L19.03 2z"/></svg>
    );
  },
);

SwitchHorizontal01.displayName = 'SwitchHorizontal01';
