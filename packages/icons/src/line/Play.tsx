import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Play = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3.25 4.275c0-2.332 2.544-3.772 4.544-2.572l12.865 7.725c1.941 1.165 1.941 3.979 0 5.144L7.794 22.297c-2 1.2-4.544-.24-4.544-2.572zm3.515-.857a1 1 0 0 0-1.515.857v15.45a1 1 0 0 0 1.515.857l12.865-7.725a1 1 0 0 0 0-1.714z"/></svg>
    );
  },
);

Play.displayName = 'Play';
