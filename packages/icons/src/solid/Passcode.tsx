import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Passcode = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 6a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4zM6 13h2v-2H6zm5 0h2v-2h-2zm5 0h2v-2h-2z"/></svg>
    );
  },
);

Passcode.displayName = 'Passcode';
