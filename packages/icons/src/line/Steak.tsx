import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Steak = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 2a8 8 0 0 1 7.456 5.1q.378-.074.77-.093L17.5 7a5.5 5.5 0 0 1 5.477 5H23v5.033c0 2.729-2.278 4.832-4.878 4.958Q18.062 22 18 22H8a7 7 0 0 1-7-7 1 1 0 0 1 .022-.2c-.006-.438-.013-1.315-.016-2.131L1 10.333h.008A8 8 0 0 1 1 10v-.024l.009-.36v-.027A8 8 0 0 1 9 2M5.883 19.53A5 5 0 0 0 8 20h.586l2-2H9q-.204 0-.411-.01a8 8 0 0 1-1.042-.124zM21 16.741q-.448.37-.967.639L17.414 20h.523l.033-.003c1.665-.051 3.03-1.39 3.03-2.964zM13.414 18l-2 2h3.172l2-2zM3.011 15.302a4.98 4.98 0 0 0 1.254 3.018l1.163-1.163a8 8 0 0 1-2.417-1.855M8.7 4.008a6 6 0 0 0-5.69 5.675l-.01.329A6 6 0 0 0 9 16h8.766q.06-.015.123-.023a3.5 3.5 0 1 0-1.713-6.718 1 1 0 0 1-1.35-.689A6 6 0 0 0 9 4zM9.001 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4"/></svg>
    );
  },
);

Steak.displayName = 'Steak';
