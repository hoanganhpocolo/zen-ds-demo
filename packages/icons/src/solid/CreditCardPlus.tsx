import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CreditCardPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 17h3v2h-3v3h-2v-3h-3v-2h3v-3h2zM19 3a4 4 0 0 1 4 4v5h-6a4 4 0 0 0-4 4v5H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 17h4v-2H5zM5 5a2 2 0 0 0-2 2v2h18V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

CreditCardPlus.displayName = 'CreditCardPlus';
