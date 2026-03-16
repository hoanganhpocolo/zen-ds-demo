import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const XMedium = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 5.414 13.414 12 20 18.586 18.586 20 12 13.414 5.414 20 4 18.586 10.586 12 4 5.414 5.414 4 12 10.586 18.586 4z"/></svg>
    );
  },
);

XMedium.displayName = 'XMedium';
