import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Map = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.929 1.276a2 2 0 0 1 2.176.077l4.89 3.422 4.052-2.894C20.7.699 23 1.88 23 3.915v12.387a4 4 0 0 1-1.942 3.43l-4.98 2.988a2 2 0 0 1-2.193-.088l-4.88-3.488-4.035 2.933C3.317 23.278 1 22.097 1 20.055V7.698a4 4 0 0 1 1.942-3.43zM9.005 16.69l5.99 4.31V7.254L9.004 3z"/></svg>
    );
  },
);

Map.displayName = 'Map';
