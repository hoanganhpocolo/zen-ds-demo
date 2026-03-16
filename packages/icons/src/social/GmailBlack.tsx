import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GmailBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.371 19.744H3.087a1.407 1.407 0 0 1-1.407-1.407V6.375c0-1.74 1.984-2.732 3.378-1.689L12 9.893l6.943-5.207c1.39-1.043 3.377-.051 3.377 1.69v11.96c0 .777-.628 1.408-1.407 1.408h-3.284V11.77L12 15.99l-5.629-4.22z"/></svg>
    );
  },
);

GmailBlack.displayName = 'GmailBlack';
