import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MedicalCross = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.204 2.01A2 2 0 0 1 16 4v4h4a2 2 0 0 1 2 2v4l-.01.204a2 2 0 0 1-1.786 1.785L20 16h-4v4l-.01.204a2 2 0 0 1-1.786 1.785L14 22h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-1.99-1.796L2 14v-4a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2h4z"/></svg>
    );
  },
);

MedicalCross.displayName = 'MedicalCross';
