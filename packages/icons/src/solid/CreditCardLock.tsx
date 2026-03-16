import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CreditCardLock = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.5 13a3 3 0 0 1 3 3v1.206h.5a1 1 0 0 1 1 1V22a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3.794a1 1 0 0 1 1-1h.5V16a3 3 0 0 1 3-3M19 3a4 4 0 0 1 4 4v4h-6a4 4 0 0 0-4 4v6H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm.5 12a1 1 0 0 0-1 1v1.206h2V16a1 1 0 0 0-1-1M5 17h4v-2H5zM5 5a2 2 0 0 0-2 2v2h18V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

CreditCardLock.displayName = 'CreditCardLock';
