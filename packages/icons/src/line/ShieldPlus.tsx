import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShieldPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.052 1.261a3 3 0 0 1 1.897 0l6.877 2.293a3 3 0 0 1 2.04 3.095l-.537 6.439a9 9 0 0 1-4.198 6.884l-4.6 2.875a1 1 0 0 1-1.06 0l-4.602-2.875a9 9 0 0 1-4.198-6.885L2.134 6.65a3 3 0 0 1 2.041-3.095zm1.265 1.898a1 1 0 0 0-.633 0L4.808 5.45a1 1 0 0 0-.68 1.032l.536 6.438a7 7 0 0 0 3.266 5.355L12 20.82l4.07-2.544a7 7 0 0 0 3.266-5.355l.537-6.438a1 1 0 0 0-.68-1.032zM13 10.515h2.516v1.969H13V15h-1.968v-2.516H8.516v-1.969h2.516V8H13z"/></svg>
    );
  },
);

ShieldPlus.displayName = 'ShieldPlus';
