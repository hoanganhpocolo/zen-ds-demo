import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Luggage01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 0a3 3 0 0 1 3 3v1a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4V3a3 3 0 0 1 3-3zM8.5 18h2v-8h-2zm5 0h2v-8h-2zM10 2a1 1 0 0 0-1 1v1h6V3a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

Luggage01.displayName = 'Luggage01';
