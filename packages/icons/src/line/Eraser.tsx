import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Eraser = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.672 3.414a4 4 0 0 1 5.656 0l2.758 2.758a4 4 0 0 1 0 5.656L12.914 20H20.5v2H6.914c-.53 0-1.04-.211-1.414-.586l-2.586-2.586a4 4 0 0 1 0-5.656zM4.328 14.586a2 2 0 0 0 0 2.828L6.914 20h3.172l6.25-6.25-5.586-5.586zm12.586-9.758a2 2 0 0 0-2.828 0L12.164 6.75l5.586 5.586 1.922-1.922a2 2 0 0 0 0-2.828z"/></svg>
    );
  },
);

Eraser.displayName = 'Eraser';
