import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MarkerPin04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.464 1.155c.289-.183.652-.206.962-.06l8.5 4a1.001 1.001 0 0 1 0 1.81L13 10.635v.393c2.235.13 4.278.688 5.85 1.561C20.619 13.573 22 15.092 22 17c0 1.91-1.38 3.428-3.15 4.41C17.046 22.413 14.622 23 12 23s-5.046-.587-6.85-1.59C3.38 20.428 2 18.91 2 17c0-1.908 1.381-3.426 3.15-4.41 1.572-.873 3.615-1.432 5.85-1.561V2a1 1 0 0 1 .464-.845M13 15.269A1.998 1.998 0 0 1 12 19a2 2 0 0 1-1-3.73v-2.236c-1.935.127-3.634.615-4.878 1.306C4.634 15.165 4 16.147 4 16.999s.634 1.835 2.122 2.662C7.576 20.468 9.652 21 12 21s4.424-.532 5.878-1.34C19.366 18.835 20 17.853 20 17s-.634-1.835-2.122-2.661c-1.244-.691-2.943-1.18-4.878-1.306zm0-6.847L18.15 6 13 3.576z"/></svg>
    );
  },
);

MarkerPin04.displayName = 'MarkerPin04';
