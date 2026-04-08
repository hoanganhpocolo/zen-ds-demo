import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PiggyBank = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11 2a5 5 0 0 1 4.872 3.87l2.39-.816A1 1 0 0 1 19.585 6v2.27l.6 1.23H22a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1.38a6.94 6.94 0 0 1-2.986 2.82V21a1 1 0 0 1-1 1H13.22a1 1 0 0 1-.976-.78 1 1 0 0 1-.975.78H7.854a1 1 0 0 1-1-1v-2.262A7.02 7.02 0 0 1 3.996 14h-.289C2.189 14 1 12.745 1 11.25S2.189 8.5 3.707 8.5h.244v2h-.244c-.367 0-.707.313-.707.75 0 .438.34.75.707.75h.29A7.04 7.04 0 0 1 6.08 7.904 5 5 0 0 1 11 2m4.981 5.946-.075.023A5.002 5.002 0 0 1 6.948 9.93 5.07 5.07 0 0 0 5.927 13c0 1.861.985 3.476 2.436 4.337l.49.29V20h1.416v-1.5h3.95V20h1.415v-2.043l.66-.238a4.93 4.93 0 0 0 2.799-2.627l.265-.592H21v-3h-2.064l-1.25-2.562a1 1 0 0 1-.101-.438V7.398zM11 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

PiggyBank.displayName = 'PiggyBank';
