import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShieldZap = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.052 1.261a3 3 0 0 1 1.897 0l6.877 2.293a3 3 0 0 1 2.04 3.095l-.537 6.439a9 9 0 0 1-4.198 6.884l-4.6 2.875a1 1 0 0 1-1.06 0l-4.602-2.875a9 9 0 0 1-4.198-6.885L2.134 6.65a3 3 0 0 1 2.041-3.095zm1.265 1.898a1 1 0 0 0-.633 0L4.808 5.45a1 1 0 0 0-.68 1.032l.536 6.438a7 7 0 0 0 3.266 5.355L12 20.82l4.07-2.544a7 7 0 0 0 3.266-5.355l.537-6.438a1 1 0 0 0-.68-1.032zm2.104 6.32a1 1 0 0 1-.133 1.525l-2.738 1.917 2.871 2.872-1.414 1.414-3.714-3.714a1 1 0 0 1 .133-1.527l2.738-1.916-2.87-2.872 1.413-1.414z"/></svg>
    );
  },
);

ShieldZap.displayName = 'ShieldZap';
