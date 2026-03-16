import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Film02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.5 1.5a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4zm-14 16a2 2 0 0 0 2 2h1v-3h-3zm5 2h2v-3h-2zm4 0h2v-3h-2zm4 0h1a2 2 0 0 0 2-2v-1h-3zm-6-5h2v-6h-2zm-5-11a2 2 0 0 0-2 2v1h3v-3zm3 3h2v-3h-2zm4 0h2v-3h-2zm4 0h3v-1a2 2 0 0 0-2-2h-1z"/></svg>
    );
  },
);

Film02.displayName = 'Film02';
