import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Luggage02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 1a4 4 0 0 1 4 4v1h2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h2V5a4 4 0 0 1 4-4zm2 19h2V8h-2zm-8 0h2V8H7zm4-17a2 2 0 0 0-2 2v1h6V5a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Luggage02.displayName = 'Luggage02';
