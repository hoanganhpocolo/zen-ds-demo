import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VolumeX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-1.04a3 3 0 0 1-2.342-1.126L5.518 17H4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.519l3.1-3.874A3 3 0 0 1 10.96 2zm-1.04 2a1 1 0 0 0-.78.375l-3.399 4.25A1 1 0 0 1 6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 1 .781.375l3.4 4.25a1 1 0 0 0 .78.375H12V4zM23 9.879l-2.293 2.293L23 14.465l-1.414 1.414-2.293-2.293L17 15.879l-1.414-1.414 2.293-2.293-2.293-2.293L17 8.465l2.293 2.293 2.293-2.293z"/></svg>
    );
  },
);

VolumeX.displayName = 'VolumeX';
