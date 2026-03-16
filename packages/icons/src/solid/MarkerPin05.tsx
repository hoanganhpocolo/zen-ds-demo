import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MarkerPin05 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a4 4 0 0 1 1 7.874v2.154c2.235.13 4.278.689 5.85 1.562 1.77.983 3.15 2.5 3.15 4.41s-1.38 3.427-3.15 4.41C17.046 22.412 14.622 23 12 23s-5.046-.588-6.85-1.59C3.38 20.427 2 18.91 2 17s1.38-3.427 3.15-4.41c1.572-.873 3.615-1.432 5.85-1.562V8.874A4.002 4.002 0 0 1 12 1m1 14.27A1.998 1.998 0 0 1 12 19a2 2 0 0 1-1-3.73v-2.237c-1.935.127-3.634.615-4.878 1.306C4.634 15.165 4 16.147 4 17s.634 1.835 2.122 2.661C7.576 20.47 9.652 21 12 21s4.424-.531 5.878-1.339C19.366 18.835 20 17.853 20 17s-.634-1.835-2.122-2.661c-1.244-.691-2.943-1.179-4.878-1.306z"/></svg>
    );
  },
);

MarkerPin05.displayName = 'MarkerPin05';
