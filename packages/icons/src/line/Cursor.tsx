import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Cursor = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M1.755 4.285c-.52-1.564.966-3.051 2.53-2.53l16.82 5.607c1.745.581 1.846 3.01.155 3.735l-7.113 3.05-3.05 7.113c-.724 1.69-3.154 1.59-3.735-.155zM9.26 20.473l3.049-7.114c.202-.472.579-.85 1.05-1.052l7.115-3.048-16.82-5.606z"/></svg>
    );
  },
);

Cursor.displayName = 'Cursor';
