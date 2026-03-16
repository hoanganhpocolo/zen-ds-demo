import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TikTokBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.397 1.68H12.92v14.059c0 1.675-1.338 3.051-3.003 3.051s-3.003-1.376-3.003-3.051c0-1.645 1.309-2.991 2.914-3.051v-3.53c-3.538.06-6.392 2.962-6.392 6.581 0 3.65 2.914 6.58 6.511 6.58s6.51-2.96 6.51-6.58V8.53a8.05 8.05 0 0 0 4.61 1.556v-3.53c-2.617-.09-4.669-2.244-4.669-4.876"/></svg>
    );
  },
);

TikTokBlack.displayName = 'TikTokBlack';
