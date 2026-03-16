import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PhoneHangUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.799 4.929-9.953 9.952a11.4 11.4 0 0 0 2.743 1.431l1.188-1.78a2 2 0 0 1 2.149-.83l2.56.639A2 2 0 0 1 22 16.28V19a3 3 0 0 1-3 3c-4 0-7.676-1.382-10.58-3.694l-3.592 3.593-1.414-1.414L6.93 16.97l3.385-3.386 10.07-10.068zM7.719 2a2 2 0 0 1 1.94 1.515l.64 2.56a2 2 0 0 1-.83 2.148L7.687 9.41c.337.94.793 1.82 1.348 2.625l-3.431 3.432A16.93 16.93 0 0 1 2 5a3 3 0 0 1 3-3z"/></svg>
    );
  },
);

PhoneHangUp.displayName = 'PhoneHangUp';
