import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Truck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11 3a4 4 0 0 1 3.874 3H17.5a4 4 0 0 1 3.2 1.6L22 9.335a5 5 0 0 1 1 2.999V16.5a2 2 0 0 1-2 2h-.145a3.501 3.501 0 0 1-6.71 0h-3.29a3.501 3.501 0 0 1-6.71 0H2.75A1.75 1.75 0 0 1 1 16.75V7a4 4 0 0 1 4-4zM7.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M15 10h5.001l-.9-1.2A2 2 0 0 0 17.5 8H15z"/></svg>
    );
  },
);

Truck.displayName = 'Truck';
