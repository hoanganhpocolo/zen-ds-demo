import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Repeat03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.653 4.476C19.255 6.042 21 8.887 21 12.142c0 3.807-2.387 7.053-5.747 8.35l1.393.692L15.81 23l-4.228-1.996a1 1 0 0 1-.433-1.434l2.353-3.81 1.702 1.051-1.24 2.007C16.876 17.974 19 15.301 19 12.142a6.94 6.94 0 0 0-3.379-5.953zm-4.151-1.153a1 1 0 0 1 .35 1.386L10.5 8.554 8.794 7.51l1.254-2.05C7.129 6.302 5 8.979 5 12.143a6.94 6.94 0 0 0 3.293 5.899l-1.057 1.7A8.94 8.94 0 0 1 3 12.14C3 8.2 5.556 4.86 9.104 3.66l-1.506-.93L8.603 1z"/></svg>
    );
  },
);

Repeat03.displayName = 'Repeat03';
