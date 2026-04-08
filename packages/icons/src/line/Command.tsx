import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Command = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 0 8h-2v4h2a4 4 0 1 1-4 4v-2h-4v2a4 4 0 1 1-4-4h2v-4H6a4 4 0 1 1 4-4v2h4V6a4 4 0 0 1 4-4M6 16a2 2 0 1 0 2 2v-2zm10 2a2 2 0 1 0 2-2h-2zm-6-4h4v-4h-4zM6 4a2 2 0 1 0 0 4h2V6a2 2 0 0 0-2-2m12 0a2 2 0 0 0-2 2v2h2a2 2 0 1 0 0-4"/></svg>
    );
  },
);

Command.displayName = 'Command';
