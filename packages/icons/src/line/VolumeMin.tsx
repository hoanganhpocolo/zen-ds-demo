import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VolumeMin = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-1.04a3 3 0 0 1-2.342-1.126L5.518 17H4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.519l3.1-3.874A3 3 0 0 1 10.96 2zm-1.04 2a1 1 0 0 0-.78.375l-3.399 4.25A1 1 0 0 1 6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 1 .781.375l3.4 4.25a1 1 0 0 0 .78.375H12V4zm7.454 3.067A5.99 5.99 0 0 1 21 12a5.99 5.99 0 0 1-2.586 4.932l-1.139-1.645a3.994 3.994 0 0 0 0-6.575z"/></svg>
    );
  },
);

VolumeMin.displayName = 'VolumeMin';
