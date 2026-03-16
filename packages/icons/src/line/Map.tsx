import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Map = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.929 1.276a2 2 0 0 1 2.176.077l4.89 3.422 4.052-2.894C20.7.699 23 1.88 23 3.915v12.387a4 4 0 0 1-1.942 3.43l-4.98 2.988a2 2 0 0 1-2.193-.088l-4.88-3.488-4.035 2.933C3.317 23.278 1 22.097 1 20.055V7.698a4 4 0 0 1 1.942-3.43zM3.97 5.983A2 2 0 0 0 3 7.698v12.357a.5.5 0 0 0 .794.404l4.035-2.934q.083-.06.171-.11V3.565zM21 3.915a.5.5 0 0 0-.791-.407l-4.053 2.894q-.076.054-.156.1v13.932l4.03-2.417a2 2 0 0 0 .97-1.715zM10 17.41q.085.05.168.108L14 20.255V6.509a2 2 0 0 1-.152-.095L10 3.72z"/></svg>
    );
  },
);

Map.displayName = 'Map';
