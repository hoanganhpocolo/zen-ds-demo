import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VolumeMax = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-1.04a3 3 0 0 1-2.342-1.126L5.518 17H4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.519l3.1-3.874A3 3 0 0 1 10.96 2zm-1.04 2a1 1 0 0 0-.78.375l-3.399 4.25A1 1 0 0 1 6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 1 .781.375l3.4 4.25a1 1 0 0 0 .78.375H12V4zm8.593 1.423A7.99 7.99 0 0 1 23 12a7.99 7.99 0 0 1-3.447 6.576l-1.139-1.644A5.99 5.99 0 0 0 21 12a5.99 5.99 0 0 0-2.586-4.933zm-2.278 3.289a3.994 3.994 0 0 1 0 6.575l-1.137-1.644a1.996 1.996 0 0 0 0-3.287z"/></svg>
    );
  },
);

VolumeMax.displayName = 'VolumeMax';
