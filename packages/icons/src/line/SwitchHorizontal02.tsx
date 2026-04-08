import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SwitchHorizontal02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22.728 15.646a1 1 0 0 1 0 1.37L19.029 21l-1.455-1.372 2.109-2.297H2v-2h17.683l-2.109-2.297 1.455-1.372zM6.426 3.372 4.317 5.67H22v2H4.317l2.109 2.297-1.456 1.372-3.697-3.984a1 1 0 0 1 0-1.37L4.97 2z"/></svg>
    );
  },
);

SwitchHorizontal02.displayName = 'SwitchHorizontal02';
