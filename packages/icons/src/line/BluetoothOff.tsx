import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BluetoothOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 9.864v-.002l2.563 2.137 8.078 6.732-1.282 1.537-2.387-1.99q-.113.14-.253.259l-3.439 2.865c-1.302 1.085-3.28.159-3.28-1.536v-5.73l-4.36 3.633-1.28-1.537 5.077-4.231-5.078-4.233-3-2.5 1.282-1.537zm2 10.002L15.438 17 12 14.135zm-2-15.73c0-1.696 1.978-2.622 3.28-1.537l3.439 2.865a2 2 0 0 1 0 3.073l-2.593 2.159-1.561-1.302 2.873-2.393L12 4.135v4.788l-2-1.667z"/></svg>
    );
  },
);

BluetoothOff.displayName = 'BluetoothOff';
