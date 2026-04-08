import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CreditCardUpload = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.293 14.293a1 1 0 0 1 1.414 0l3.207 3.207-1.414 1.414-1.5-1.5V22h-2v-4.586l-1.5 1.5-1.414-1.414zM19 3a4 4 0 0 1 4 4v5h-2v-2H3v7a2 2 0 0 0 2 2h7v2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM9 17H5v-2h4zM5 5a2 2 0 0 0-2 2v1h18V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

CreditCardUpload.displayName = 'CreditCardUpload';
