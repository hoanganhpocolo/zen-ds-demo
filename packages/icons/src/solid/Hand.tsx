import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hand = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c.909 0 1.622.708 1.622 1.55v8.19c0 .188.156.34.348.34a.344.344 0 0 0 .347-.34V3.81c0-.843.714-1.55 1.623-1.55.908 0 1.62.707 1.62 1.55v6.93c0 .188.157.34.348.34a.345.345 0 0 0 .349-.34V7.59c0-.843.712-1.55 1.62-1.55.91 0 1.623.707 1.623 1.55v6.3c0 5.025-4.247 9.11-9.5 9.11s-9.5-4.085-9.5-9.11v-2.52c0-.843.713-1.55 1.622-1.55s1.621.707 1.621 1.55v2.671h.696V3.81c0-.843.713-1.55 1.622-1.55.908 0 1.621.707 1.622 1.55v6.93c0 .188.156.34.347.34a.344.344 0 0 0 .348-.34V2.55C10.378 1.709 11.09 1 12 1"/></svg>
    );
  },
);

Hand.displayName = 'Hand';
