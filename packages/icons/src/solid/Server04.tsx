import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Server04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.79 1.5c.716 0 1.31 0 1.797.038.509.04.977.124 1.428.333a4 4 0 0 1 1.707 1.51c.263.422.404.878.507 1.379.375 1.842.505 3.752.738 5.616.192 1.537-.465 3.154-1.66 4.124a4.5 4.5 0 0 1 1.668 3.5c0 2.485-2.011 4.5-4.49 4.5H6.514a4.494 4.494 0 0 1-4.49-4.5c0-1.414.65-2.675 1.667-3.5-1.195-.97-1.85-2.588-1.659-4.124.233-1.864.363-3.774.739-5.616.102-.501.242-.957.505-1.38a4 4 0 0 1 1.707-1.509c.45-.209.92-.294 1.428-.333C6.9 1.5 7.494 1.5 8.21 1.5zm-9.275 14A2.497 2.497 0 0 0 4.02 18c0 1.38 1.116 2.5 2.494 2.5h10.97A2.5 2.5 0 0 0 19.98 18c0-1.38-1.118-2.5-2.496-2.5zm.508 1.5a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm9.963 2h-5.984v-2h5.984zM6.515 8.5A2.497 2.497 0 0 0 4.02 11c0 1.38 1.116 2.5 2.494 2.5h10.97A2.5 2.5 0 0 0 19.98 11c0-1.38-1.118-2.5-2.496-2.5zm.508 1.5a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm9.963 2h-5.984v-2h5.984z"/></svg>
    );
  },
);

Server04.displayName = 'Server04';
