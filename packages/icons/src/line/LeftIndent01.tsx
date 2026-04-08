import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LeftIndent01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2v-2h20zM2 9.135c0-1.696 1.978-2.622 3.28-1.536l3.439 2.865a2 2 0 0 1 0 3.072L5.28 16.401C3.978 17.487 2 16.561 2 14.865zM22 16H12v-2h10zM4 14.865 7.438 12 4 9.135zM22 10H12V8h10zm0-6H2V2h20z"/></svg>
    );
  },
);

LeftIndent01.displayName = 'LeftIndent01';
