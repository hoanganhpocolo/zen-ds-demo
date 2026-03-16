import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PhoneCall = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.719 3a2 2 0 0 1 1.94 1.515l.64 2.56a2 2 0 0 1-.83 2.148L6.687 10.41a11.45 11.45 0 0 0 6.902 6.903l1.188-1.782a2 2 0 0 1 2.149-.83l2.56.64A2 2 0 0 1 21 17.28V20a3 3 0 0 1-3 3C8.611 23 1 15.389 1 6a3 3 0 0 1 3-3zM13 6a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3zm0-4a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7z"/></svg>
    );
  },
);

PhoneCall.displayName = 'PhoneCall';
