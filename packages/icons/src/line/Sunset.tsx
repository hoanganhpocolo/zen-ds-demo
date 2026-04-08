import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Sunset = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2v-2h20zM3.5 18H1v-2h2.5zm8.5-6c3.317 0 6 2.717 6 6h-2c0-2.185-1.794-4-4-4s-4 1.815-4 4H6c0-3.283 2.683-6 6-6m11 6h-2.5v-2H23zM6.707 10.293l-1.414 1.414-2-2 1.414-1.414zm14-.586-2 2-1.414-1.414 2-2zM13 2v4.586l2.293-2.293 1.414 1.414-4 4a1 1 0 0 1-1.414 0l-4-4 1.414-1.414L11 6.586V2z"/></svg>
    );
  },
);

Sunset.displayName = 'Sunset';
