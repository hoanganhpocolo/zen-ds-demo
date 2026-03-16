import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.5 16H9a5 5 0 0 0-5 5h9v2H4a2 2 0 0 1-2-2 7 7 0 0 1 7-7h6.5zm4 0v3.586l2.086-2.086L23 18.914l-3.793 3.793a1 1 0 0 1-1.414 0L14 18.914l1.414-1.414 2.086 2.086V16zM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

UserDown.displayName = 'UserDown';
