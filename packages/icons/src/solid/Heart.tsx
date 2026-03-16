import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Heart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.495 3.886c2.32-2.515 6.118-2.515 8.438 0 3.004 3.255 2.383 7.336.369 10.668-2.008 3.32-5.53 6.185-8.971 7.39a1 1 0 0 1-.661 0c-3.44-1.205-6.963-4.07-8.97-7.39C.684 11.222.062 7.14 3.065 3.886c2.32-2.515 6.118-2.514 8.439 0l.495.536z"/></svg>
    );
  },
);

Heart.displayName = 'Heart';
