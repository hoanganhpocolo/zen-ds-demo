import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GamingPad01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.587 3a6 6 0 0 1 5.953 5.256l1.172 9.372A3 3 0 0 1 20.734 21H20a3 3 0 0 1-2.4-1.2l-1.8-2.4a1 1 0 0 0-.8-.4H9c-.314 0-.611.149-.8.4l-1.8 2.4A3 3 0 0 1 4 21h-.734a3 3 0 0 1-2.977-3.372l1.172-9.372A6 6 0 0 1 7.414 3zM7 9H5v2h2v2h2v-2h2V9H9V7H7zm10.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

GamingPad01.displayName = 'GamingPad01';
