import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Globe02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c.948 0 1.87.12 2.749.347C19.493 2.567 23 6.873 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12c0-1.72.395-3.349 1.1-4.8A11 11 0 0 1 12 1m.854 12.342a1 1 0 0 0-1.265.481l-.404.807a1 1 0 0 0-.054.763l.642 1.923a1 1 0 0 0 .948.684h1.744a1 1 0 0 0 .832-.445l1.02-1.53a1 1 0 0 0-.462-1.483zM12 3a9 9 0 0 0-7.686 4.314L6.981 9.11a1 1 0 0 0 1.359-.23l.36-.48a1 1 0 0 1 .394-.314l3.446-1.531a1 1 0 0 0 .588-.808l.281-2.638A9 9 0 0 0 12 3"/></svg>
    );
  },
);

Globe02.displayName = 'Globe02';
