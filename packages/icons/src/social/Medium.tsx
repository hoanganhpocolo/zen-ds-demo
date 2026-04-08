import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Medium = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.501 17.7c3.215 0 5.821-2.63 5.821-5.872s-2.606-5.872-5.82-5.872c-3.216 0-5.822 2.63-5.822 5.872s2.606 5.871 5.821 5.871m12.207-5.871c0 3.052-1.303 5.528-2.91 5.528s-2.911-2.476-2.911-5.528c0-3.053 1.303-5.528 2.91-5.528s2.911 2.474 2.911 5.528m2.612 0c0 2.734-.458 4.952-1.024 4.952-.565 0-1.023-2.218-1.023-4.952s.458-4.952 1.023-4.952c.566 0 1.024 2.217 1.024 4.952"/></svg>
    );
  },
);

Medium.displayName = 'Medium';
