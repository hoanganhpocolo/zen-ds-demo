import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MarkerPin02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a9 9 0 0 1 9 9c0 3.678-2.06 5.686-3.982 7.298-2 1.678-3.623 2.825-4.038 4.898a1 1 0 0 1-1.96 0c-.415-2.073-2.038-3.22-4.038-4.898C5.061 15.686 3 13.678 3 10a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.74 1.44 4.232 3.268 5.766C9.478 16.78 10.99 17.88 12 19.432c1.01-1.551 2.522-2.65 3.732-3.666C17.561 14.232 19 12.74 19 10a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

MarkerPin02.displayName = 'MarkerPin02';
