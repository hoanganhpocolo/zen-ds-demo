import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Luggage02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 1a4 4 0 0 1 4 4v1h2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h2V5a4 4 0 0 1 4-4zm4 19h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2zm-8 0h6V8H9zM5 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2V8zm6-5a2 2 0 0 0-2 2v1h6V5a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Luggage02.displayName = 'Luggage02';
