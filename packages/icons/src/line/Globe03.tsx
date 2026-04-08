import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Globe03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c1.046 0 2.06.147 3.021.42a4.88 4.88 0 0 1 5.529 1.108C21.77 3.8 22.22 5.565 21.9 7.2A10.96 10.96 0 0 1 23 12c0 6.075-4.925 11-11 11-1.72 0-3.349-.395-4.8-1.1A11 11 0 0 1 1 12a11 11 0 0 1 .347-2.75C2.567 4.508 6.873 1 12 1m0 2a9 9 0 0 0-8.35 5.637l3.456.369a1 1 0 0 1 .808.588l1.895 4.262 1.79 1.344a1 1 0 0 1 .231 1.359L9.15 20.54A9 9 0 0 0 12 21a9 9 0 0 0 8.691-11.346q-.053.06-.108.118l-2.8 3.518a1 1 0 0 1-1.565 0l-2.801-3.518c-1.74-1.848-1.877-4.71-.41-6.716A9 9 0 0 0 12 3m-8.89 7.59Q3 11.28 3 12a9 9 0 0 0 4.314 7.686L9.64 16.23 8.4 15.3a1 1 0 0 1-.314-.394L6.32 10.934zm15.996-6.677a2.887 2.887 0 0 0-4.212 0c-1.191 1.24-1.191 3.27 0 4.51l.06.07L17 11.062l2.046-2.569.06-.07c1.191-1.24 1.191-3.27 0-4.51M17 4.667a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666"/></svg>
    );
  },
);

Globe03.displayName = 'Globe03';
