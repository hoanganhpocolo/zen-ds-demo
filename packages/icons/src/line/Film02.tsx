import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Film02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-3.794 3.995L18 22H6a4 4 0 0 1-4-4V6l.005-.206A4 4 0 0 1 6 2zM4 18a2 2 0 0 0 2 2h1v-2zm5 0v2h2v-2zm4 0v2h2v-2zm4 0v2h1l.204-.01A2 2 0 0 0 20 18zM4 16h7V8H4zm9 0h7V8h-7zM6 4a2 2 0 0 0-1.99 1.796L4 6h3V4zm3 2h2V4H9zm4 0h2V4h-2zm4 0h3a2 2 0 0 0-2-2h-1z"/></svg>
    );
  },
);

Film02.displayName = 'Film02';
