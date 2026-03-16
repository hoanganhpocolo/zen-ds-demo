import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Reflect01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 22h-2V2h2zM1 8.174c0-1.709 2.005-2.63 3.302-1.519l4.463 3.826a2 2 0 0 1 0 3.038l-4.463 3.826C3.005 18.456 1 17.535 1 15.826zm18.698-1.519C20.995 5.543 23 6.465 23 8.174v7.652c0 1.709-2.005 2.63-3.302 1.519l-4.463-3.826a2 2 0 0 1 0-3.038zM3 15.826 7.464 12 3 8.174zM16.536 12 21 15.826V8.174z"/></svg>
    );
  },
);

Reflect01.displayName = 'Reflect01';
