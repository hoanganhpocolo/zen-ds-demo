import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Glasses01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.002 7c1.34 0 2.59.52 3.539 1.46C22.481 9.4 23 10.66 23 12s-.52 2.59-1.459 3.54c-.94.94-2.2 1.46-3.539 1.46h-.01a4.99 4.99 0 0 1-4.998-4.82 3 3 0 0 0-2.009 0 4.96 4.96 0 0 1-1.459 3.36 5 5 0 0 1-7.067 0A4.98 4.98 0 0 1 1 12c0-1.34.52-2.59 1.459-3.54 1.95-1.95 5.128-1.94 7.077 0 .5.5.88 1.08 1.12 1.72a5.07 5.07 0 0 1 2.678 0c.25-.64.63-1.22 1.13-1.72A4.97 4.97 0 0 1 18.002 7M5.998 9c-.77 0-1.54.29-2.12.88C3.31 10.45 3 11.2 3 12s.31 1.55.88 2.12A2.998 2.998 0 1 0 5.998 9m11.994 0c-.8 0-1.55.31-2.119.88s-.88 1.32-.88 2.12.31 1.55.88 2.12c1.13 1.13 3.109 1.13 4.238 0 .57-.57.88-1.32.88-2.12s-.31-1.55-.88-2.12A2.97 2.97 0 0 0 17.992 9"/></svg>
    );
  },
);

Glasses01.displayName = 'Glasses01';
