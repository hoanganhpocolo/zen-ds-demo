import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Cloud = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 3a7 7 0 0 1 6.967 6.33A6.002 6.002 0 0 1 17 21H7A6 6 0 0 1 5.032 9.33 7 7 0 0 1 12 3"/></svg>
    );
  },
);

Cloud.displayName = 'Cloud';
