import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImageRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h.57l8.11-8.561a2 2 0 0 1 2.6-.264l4.293 3.006A1 1 0 0 1 22 15v3a4 4 0 0 1-3.794 3.995L18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h6zM8.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m14.207-1.207a1 1 0 0 1 0 1.414L18.914 10 17.5 8.586 19.586 6.5H15.5v-2h4.086L17.5 2.414 18.914 1z"/></svg>
    );
  },
);

ImageRight.displayName = 'ImageRight';
