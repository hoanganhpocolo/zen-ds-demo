import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PhoneIncoming = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.719 2a2 2 0 0 1 1.94 1.515l.64 2.56a2 2 0 0 1-.83 2.148L7.687 9.41a11.45 11.45 0 0 0 6.902 6.903l1.188-1.782a2 2 0 0 1 2.149-.83l2.56.64A2 2 0 0 1 22 16.28V19a3 3 0 0 1-3 3C9.611 22 2 14.389 2 5a3 3 0 0 1 3-3zm14.28 1.414L17.975 7.44h3.085v2h-5.5a1 1 0 0 1-1-1v-5.5h2v3.086L20.585 2z"/></svg>
    );
  },
);

PhoneIncoming.displayName = 'PhoneIncoming';
