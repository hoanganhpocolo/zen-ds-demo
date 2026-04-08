import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Sandwich = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.5 2A5.5 5.5 0 0 1 22 7.5a5.49 5.49 0 0 1-2 4.238V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7.262A5.49 5.49 0 0 1 2 7.5 5.5 5.5 0 0 1 7.5 2zm-4 2a3.5 3.5 0 0 0-1.943 6.41 1 1 0 0 1 .443.831V19a1 1 0 0 0 1 1h5l.102-.005A1 1 0 0 0 18 19v-7.759a1 1 0 0 1 .443-.83A3.5 3.5 0 0 0 16.5 4z"/></svg>
    );
  },
);

Sandwich.displayName = 'Sandwich';
