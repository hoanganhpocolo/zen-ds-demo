import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CoffeeBean = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3.61 3.61c1.825-1.824 4.434-2.396 7.065-1.981 2.631.416 5.365 1.823 7.619 4.077s3.662 4.988 4.077 7.62c.415 2.63-.156 5.239-1.981 7.064s-4.434 2.396-7.065 1.981-5.364-1.823-7.619-4.077-3.661-4.988-4.077-7.62c-.415-2.63.157-5.239 1.981-7.064m6.752-.005c-1.383-.219-2.658-.094-3.727.351a16.07 16.07 0 0 1 10.969 11.017l.358 1.253-1.924.549-.357-1.252A14.07 14.07 0 0 0 4.584 5.529c-.934 1.239-1.28 2.934-.98 4.833.343 2.171 1.528 4.53 3.516 6.518s4.347 3.173 6.518 3.516c2.172.342 4.077-.16 5.338-1.42 1.26-1.261 1.762-3.166 1.42-5.338-.343-2.171-1.528-4.53-3.516-6.518s-4.347-3.173-6.518-3.515"/></svg>
    );
  },
);

CoffeeBean.displayName = 'CoffeeBean';
