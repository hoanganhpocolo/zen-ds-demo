import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CreditCardLock = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.5 12a3 3 0 0 1 3 3v1.206h.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3.794a1 1 0 0 1 1-1h.5V15a3 3 0 0 1 3-3m.5-9a4 4 0 0 1 4 4v4h-2v-1H3v7a2 2 0 0 0 2 2h7v2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm-3 17h5v-1.794h-5zm-7-3H5v-2h4zm9.5-3a1 1 0 0 0-1 1v1.206h2V15a1 1 0 0 0-1-1M5 5a2 2 0 0 0-2 2v1h18V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

CreditCardLock.displayName = 'CreditCardLock';
