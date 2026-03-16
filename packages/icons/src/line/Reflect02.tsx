import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Reflect02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.481 15.235a2 2 0 0 1 3.038 0l3.826 4.463c1.111 1.297.19 3.302-1.519 3.302H8.174c-1.709 0-2.63-2.005-1.519-3.302zM8.174 21h7.652L12 16.536zM22 13H2v-2h20zM15.826 1c1.709 0 2.63 2.005 1.519 3.302l-3.826 4.463a2 2 0 0 1-3.038 0L6.655 4.302C5.543 3.005 6.465 1 8.174 1zM12 7.464 15.826 3H8.174z"/></svg>
    );
  },
);

Reflect02.displayName = 'Reflect02';
