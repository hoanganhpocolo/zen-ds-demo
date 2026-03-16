import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Colors = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a7 7 0 0 1 6.818 8.59A7 7 0 1 1 12 21.746 7 7 0 1 1 5.182 9.591 7 7 0 0 1 12 1M5.911 11.456a5.001 5.001 0 1 0 6.978 3.488 7 7 0 0 1-6.978-3.488m1.12-4.012Q7 7.718 7 8a5 5 0 0 0 5.555 4.969zm2.317-3.682a5 5 0 0 0-1.586 1.586l6.89 6.89a5 5 0 0 0 1.585-1.587zM12 3q-.282 0-.556.03l5.525 5.525q.03-.273.031-.555a5 5 0 0 0-5-5"/></svg>
    );
  },
);

Colors.displayName = 'Colors';
