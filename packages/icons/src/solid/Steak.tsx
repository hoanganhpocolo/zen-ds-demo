import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Steak = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 2a8 8 0 0 1 7.456 5.1q.378-.074.77-.093L17.5 7a5.5 5.5 0 0 1 5.477 5H23v5.033c0 2.729-2.279 4.832-4.878 4.958Q18.062 22 18 22H8a7 7 0 0 1-7-7 1 1 0 0 1 .022-.2c-.006-.438-.013-1.315-.016-2.131L1 10.333h.008L1 10v-.024l.009-.36v-.027a8 8 0 0 1 7.593-7.58zm-.299 2.008A6 6 0 0 0 3.01 9.683l-.01.329a6 6 0 0 0 5.69 5.98L9 16h8.766q.06-.015.123-.023a3.5 3.5 0 1 0-1.713-6.718 1 1 0 0 1-1.35-.689A6 6 0 0 0 9 4zM9.501 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"/></svg>
    );
  },
);

Steak.displayName = 'Steak';
