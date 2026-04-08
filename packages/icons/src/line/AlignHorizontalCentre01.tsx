import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignHorizontalCentre01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 23h-2V1h2zM9.207 11.293a1 1 0 0 1 0 1.414l-4.5 4.5-1.414-1.414L6.086 13H1v-2h5.086L3.293 8.207l1.414-1.414zm11.5-3.086L17.914 11H23v2h-5.086l2.793 2.793-1.414 1.414-4.5-4.5a1 1 0 0 1 0-1.414l4.5-4.5z"/></svg>
    );
  },
);

AlignHorizontalCentre01.displayName = 'AlignHorizontalCentre01';
