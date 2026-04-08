import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Film01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM4 18a2 2 0 0 0 2 2h1v-3H4zm13 2h1a2 2 0 0 0 2-2v-1h-3zM4 15h3v-2H4zm13 0h3v-2h-3zm-8-2h6v-2H9zm-5-2h3V9H4zm13 0h3V9h-3zM6 4a2 2 0 0 0-2 2v1h3V4zm11 3h3V6a2 2 0 0 0-2-2h-1z"/></svg>
    );
  },
);

Film01.displayName = 'Film01';
