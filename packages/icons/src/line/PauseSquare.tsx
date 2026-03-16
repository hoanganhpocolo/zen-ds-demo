import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PauseSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-3.794 3.995L18 22H6a4 4 0 0 1-4-4V6l.005-.206A4 4 0 0 1 6 2zM6 4a2 2 0 0 0-1.99 1.796L4 6v12a2 2 0 0 0 2 2h12l.204-.01A2 2 0 0 0 20 18V6a2 2 0 0 0-2-2zm4.5 13h-2V7h2zm5 0h-2V7h2z"/></svg>
    );
  },
);

PauseSquare.displayName = 'PauseSquare';
