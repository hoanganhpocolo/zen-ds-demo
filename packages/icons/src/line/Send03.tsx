import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Send03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M2.049 4.813c-.683-1.707 1.106-3.354 2.75-2.531l15.86 7.928c1.474.737 1.473 2.841 0 3.579l-15.86 7.928c-1.644.823-3.433-.823-2.75-2.531l2.874-7.187zm4.629 8.186-2.773 6.93L17.764 13zm0-2h11.086L3.905 4.07z"/></svg>
    );
  },
);

Send03.displayName = 'Send03';
