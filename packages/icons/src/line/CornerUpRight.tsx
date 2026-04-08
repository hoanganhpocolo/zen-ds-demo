import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CornerUpRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.688 7.042a1 1 0 0 1 0 1.452l-5.32 5.042-1.376-1.452 3.5-3.316H10a5 5 0 0 0-5 5V21H3v-7.232a7 7 0 0 1 7-7h8.491L14.992 3.45 16.368 2z"/></svg>
    );
  },
);

CornerUpRight.displayName = 'CornerUpRight';
