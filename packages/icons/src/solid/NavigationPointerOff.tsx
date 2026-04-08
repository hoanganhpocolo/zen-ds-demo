import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const NavigationPointerOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22.425 17.47-1.414 1.415-2.947-2.946-1.761 5.285c-.582 1.745-3.011 1.846-3.736.155L9.52 14.265l-7.115-3.049c-1.69-.724-1.589-3.153.156-3.735l5.284-1.763-2.39-2.39 1.414-1.414zM19.38 1.873c1.563-.52 3.051.967 2.53 2.53l-2.431 7.293-7.393-7.392z"/></svg>
    );
  },
);

NavigationPointerOff.displayName = 'NavigationPointerOff';
