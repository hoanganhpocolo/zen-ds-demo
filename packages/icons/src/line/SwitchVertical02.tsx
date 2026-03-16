import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SwitchVertical02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.169 2v17.683l2.297-2.109 1.372 1.455-3.984 3.699a1 1 0 0 1-1.37 0L2.5 19.029l1.372-1.455 2.297 2.109V2zm7.976-.727a1 1 0 0 1 1.372 0L21.5 4.97l-1.372 1.455-2.297-2.108V22h-2V4.317l-2.297 2.108-1.372-1.455z"/></svg>
    );
  },
);

SwitchVertical02.displayName = 'SwitchVertical02';
