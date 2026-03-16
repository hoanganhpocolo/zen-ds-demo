import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShieldSplit = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.052 1.261a3 3 0 0 1 1.897 0l6.877 2.293a3 3 0 0 1 2.04 3.095l-.537 6.439a9 9 0 0 1-4.198 6.884l-4.6 2.875a1 1 0 0 1-1.06 0l-4.602-2.875a9 9 0 0 1-4.198-6.885L2.134 6.65a3 3 0 0 1 2.041-3.095zm-6.244 4.19a1 1 0 0 0-.68 1.032l.536 6.438a7 7 0 0 0 3.266 5.355L11 20.195V3.386zM13 20.195l3.07-1.919a7 7 0 0 0 3.266-5.355l.537-6.438a1 1 0 0 0-.68-1.032L13 3.386z"/></svg>
    );
  },
);

ShieldSplit.displayName = 'ShieldSplit';
