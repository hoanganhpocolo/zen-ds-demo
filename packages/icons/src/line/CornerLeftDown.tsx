import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CornerLeftDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 3v2h-7.232a5 5 0 0 0-5 5v8.491l3.316-3.499 1.452 1.376-5.042 5.32a1 1 0 0 1-1.452 0L2 16.368l1.451-1.376 3.317 3.5V10a7 7 0 0 1 7-7z"/></svg>
    );
  },
);

CornerLeftDown.displayName = 'CornerLeftDown';
