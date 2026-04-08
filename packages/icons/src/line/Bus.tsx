import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v10c0 1.48-.805 2.771-2 3.463V20a3 3 0 1 1-6 0h-4a3 3 0 1 1-6 0v-.537A4 4 0 0 1 2 16V6a4 4 0 0 1 4-4zM6 20a1 1 0 1 0 2 0zm10 0a1 1 0 1 0 2 0zM4 16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3H4zm3.5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M6 4a2 2 0 0 0-2 2v5h16V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Bus.displayName = 'Bus';
