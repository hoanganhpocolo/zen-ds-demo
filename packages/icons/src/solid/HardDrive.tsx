import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const HardDrive = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.745 3a4 4 0 0 1 3.486 2.04l3.255 5.785A4 4 0 0 1 23 12.786V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-4.214a4 4 0 0 1 .514-1.96l3.255-5.787A4 4 0 0 1 8.255 3zM3 17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4H3zm8 0H6v-2h5z"/></svg>
    );
  },
);

HardDrive.displayName = 'HardDrive';
