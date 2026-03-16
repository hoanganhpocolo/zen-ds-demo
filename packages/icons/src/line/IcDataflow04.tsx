import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IcDataflow04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-6v3h4a4 4 0 0 1 4 4v1.174A2.998 2.998 0 0 1 20 23a3 3 0 0 1-1-5.826V16a2 2 0 0 0-2-2h-4v3.174A2.998 2.998 0 0 1 12 23a3 3 0 0 1-1-5.826V14H7a2 2 0 0 0-2 2v1.174A2.998 2.998 0 0 1 4 23a3 3 0 0 1-1-5.826V16a4 4 0 0 1 4-4h4V9H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zM4 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

IcDataflow04.displayName = 'IcDataflow04';
