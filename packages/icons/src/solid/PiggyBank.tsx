import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PiggyBank = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11 2a5 5 0 0 1 4.872 3.87l2.39-.816A1 1 0 0 1 19.585 6v2.27l.6 1.23H22a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1.38a6.94 6.94 0 0 1-2.986 2.82V21a1 1 0 0 1-1 1H13.22a1 1 0 0 1-.976-.78 1 1 0 0 1-.975.78H7.854a1 1 0 0 1-1-1v-2.262A7.02 7.02 0 0 1 3.996 14h-.289C2.189 14 1 12.745 1 11.25S2.189 8.5 3.707 8.5h.244v2h-.244c-.367 0-.707.313-.707.75 0 .438.34.75.707.75h.29A7.04 7.04 0 0 1 6.08 7.904 5 5 0 0 1 11 2m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

PiggyBank.displayName = 'PiggyBank';
