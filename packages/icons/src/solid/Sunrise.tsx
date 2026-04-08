import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Sunrise = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2v-2h20zM3.5 18H1v-2h2.5zm8.5-6c3.317 0 6 2.717 6 6H6c0-3.283 2.683-6 6-6m11 4v2h-2.5v-2zM6.707 10.293l-1.414 1.414-2-2 1.414-1.414zm14-.586-2 2-1.414-1.414 2-2zm-9.414-7.414a1 1 0 0 1 1.414 0l4 4-1.414 1.414L13 5.414V9h-2V5.414L8.707 7.707 7.293 6.293z"/></svg>
    );
  },
);

Sunrise.displayName = 'Sunrise';
