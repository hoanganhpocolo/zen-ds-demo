import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SwitchVertical01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m17.831 19.683 2.297-2.109L21.5 19.03l-3.983 3.699a1 1 0 0 1-1.372 0l-3.983-3.699 1.372-1.455 2.297 2.109V2h2zM6.483 1.273a1 1 0 0 1 1.371 0l3.984 3.697-1.372 1.456-2.297-2.109V22h-2V4.317L3.872 6.426 2.5 4.97z"/></svg>
    );
  },
);

SwitchVertical01.displayName = 'SwitchVertical01';
