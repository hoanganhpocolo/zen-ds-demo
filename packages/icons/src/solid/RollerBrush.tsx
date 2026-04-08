import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RollerBrush = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 1a1 1 0 0 1 1 1v1.5a3 3 0 0 1 3 3V9a3 3 0 0 1-3 3h-5a2 2 0 0 0-2 2h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1a4 4 0 0 1 4-4h5a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1V7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-8 20h2v-5h-2z"/></svg>
    );
  },
);

RollerBrush.displayName = 'RollerBrush';
