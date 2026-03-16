import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Monitor03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 22H6v-2h3zM20 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM9 13H3v1a2 2 0 0 0 2 2h4v2H5a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4zm8 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Monitor03.displayName = 'Monitor03';
