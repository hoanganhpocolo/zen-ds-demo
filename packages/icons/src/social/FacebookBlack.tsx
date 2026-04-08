import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FacebookBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1.674c5.7 0 10.32 4.62 10.32 10.32 0 5.276-3.96 9.627-9.07 10.244v-7.09h2.792l.58-3.154H13.25v-1.115c0-.834.164-1.41.539-1.78.375-.368.961-.528 1.807-.528q.323 0 .587.006c.254.007.461.017.606.032V5.751a3 3 0 0 0-.203-.048 12 12 0 0 0-2.041-.209c-1.562 0-2.743.335-3.568 1.027-.995.836-1.47 2.193-1.47 4.114v1.359H7.379v3.153h2.128v6.863C5.012 20.895 1.68 16.834 1.68 11.994c0-5.7 4.62-10.32 10.32-10.32"/></svg>
    );
  },
);

FacebookBlack.displayName = 'FacebookBlack';
