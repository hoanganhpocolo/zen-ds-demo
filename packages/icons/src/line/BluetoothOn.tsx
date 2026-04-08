import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BluetoothOn = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.5 3.156c0-1.702 1.992-2.627 3.292-1.527l3.952 3.345a2 2 0 0 1 0 3.052L13.048 12l4.696 3.974a2 2 0 0 1 0 3.052l-3.952 3.345c-1.3 1.1-3.292.175-3.292-1.527v-6.689l-4.854 4.109-1.292-1.528L9.951 12 4.354 7.264l1.292-1.528L10.5 9.844zm2 17.688 3.952-3.344-3.952-3.345zm0-11L16.452 6.5 12.5 3.156z"/></svg>
    );
  },
);

BluetoothOn.displayName = 'BluetoothOn';
