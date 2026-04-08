import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Apple = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 1a4 4 0 0 1 3.747 2.6c1.01-.936 2.443-1.6 4.265-1.6v2c-2.206 0-3.429 1.335-3.846 2.45A6.8 6.8 0 0 1 15.6 6c3.46 0 6.4 2.615 6.4 6v1a9 9 0 0 1-9 9h-2a9 9 0 0 1-9-9v-1c0-3.065 2.41-5.499 5.435-5.932A4 4 0 0 1 6 3V2a1 1 0 0 1 1-1zM8 3a2 2 0 0 0 2 2h1a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Apple.displayName = 'Apple';
