import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CornerRightDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.232 3a7 7 0 0 1 7 7v8.491l3.317-3.499L22 16.368l-5.042 5.32a1 1 0 0 1-1.452 0l-5.042-5.32 1.452-1.376 3.316 3.5V10a5 5 0 0 0-5-5H3V3z"/></svg>
    );
  },
);

CornerRightDown.displayName = 'CornerRightDown';
