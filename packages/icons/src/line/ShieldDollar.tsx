import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShieldDollar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.052 1.261a3 3 0 0 1 1.897 0l6.877 2.293a3 3 0 0 1 2.04 3.095l-.537 6.439a9 9 0 0 1-4.198 6.884l-4.6 2.875a1 1 0 0 1-1.06 0l-4.602-2.875a9 9 0 0 1-4.198-6.885L2.134 6.65a3 3 0 0 1 2.041-3.095zm1.265 1.898a1 1 0 0 0-.633 0L4.808 5.45a1 1 0 0 0-.68 1.032l.536 6.438a7 7 0 0 0 3.266 5.355L12 20.82l4.07-2.544a7 7 0 0 0 3.266-5.355l.537-6.438a1 1 0 0 0-.68-1.032zm.757 3.378A2.57 2.57 0 0 1 15.5 9.1h-2a.567.567 0 0 0-.567-.566h-1.445a.8.8 0 0 0-.582.253.94.94 0 0 0-.26.653c0 .252.098.486.26.653a.8.8 0 0 0 .582.253h1.17a2.8 2.8 0 0 1 2.022.864c.529.548.82 1.284.82 2.043s-.291 1.496-.82 2.043a2.82 2.82 0 0 1-1.606.832V17.5h-2v-1.34h-.114A2.66 2.66 0 0 1 8.3 13.5h2c0 .364.296.66.66.66h1.699a.8.8 0 0 0 .583-.253.94.94 0 0 0 .258-.653.94.94 0 0 0-.258-.654.8.8 0 0 0-.583-.254h-1.171a2.8 2.8 0 0 1-2.022-.863 2.94 2.94 0 0 1-.82-2.043c0-.76.292-1.495.82-2.043a2.82 2.82 0 0 1 1.608-.833V5.5h2z"/></svg>
    );
  },
);

ShieldDollar.displayName = 'ShieldDollar';
