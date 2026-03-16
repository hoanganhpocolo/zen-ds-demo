import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VolumePlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-.93a3 3 0 0 1-2.496-1.336L5.464 16H3.5A2.5 2.5 0 0 1 1 13.5v-3A2.5 2.5 0 0 1 3.5 8h1.965l3.11-4.664A3 3 0 0 1 11.07 2zm8.5 9H23v2h-2.5v2.5h-2V13H16v-2h2.5V8.5h2z"/></svg>
    );
  },
);

VolumePlus.displayName = 'VolumePlus';
