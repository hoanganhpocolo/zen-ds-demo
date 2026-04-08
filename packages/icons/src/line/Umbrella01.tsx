import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Umbrella01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c5.545 0 10 4.631 10 10.182V12a1 1 0 0 1-1 1h-8v6.575a1.425 1.425 0 0 0 2.85 0v-1.212h2v1.212a3.425 3.425 0 0 1-6.85 0V13H3a1 1 0 0 1-1-1v-.818C2 5.632 6.455 1 12 1m0 2c-4.337 0-7.902 3.592-7.998 8h15.996C19.902 6.592 16.337 3 12 3"/></svg>
    );
  },
);

Umbrella01.displayName = 'Umbrella01';
