import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Sun = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 23h-2v-2h2zm-6.657-3.929-1.414 1.414-1.414-1.414 1.414-1.414zm14.142 0-1.414 1.414-1.415-1.414 1.415-1.414zM12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-9 6H1v-2h2zm20 0h-2v-2h2zm-2.515-8.071-1.414 1.415-1.414-1.415 1.414-1.414zm-14.142 0L4.929 6.343 3.515 4.929l1.414-1.414zM13 3h-2V1h2z"/></svg>
    );
  },
);

Sun.displayName = 'Sun';
