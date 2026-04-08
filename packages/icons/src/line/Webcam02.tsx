import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Webcam02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 23H8v-2h8zM12 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 1.895a7.106 7.106 0 1 0 0 14.21 7.106 7.106 0 0 0 0-14.21m0 3.138a3.967 3.967 0 1 1 0 7.933 3.967 3.967 0 0 1 0-7.933m0 1.895a2.072 2.072 0 1 0 0 4.144 2.072 2.072 0 0 0 0-4.144"/></svg>
    );
  },
);

Webcam02.displayName = 'Webcam02';
