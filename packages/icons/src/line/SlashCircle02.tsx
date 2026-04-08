import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SlashCircle02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M6.382 19.032A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 5.618-1.968L12 13.414zM13.414 12l5.618 5.618A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.968-5.618zM4.968 6.382A8.96 8.96 0 0 0 3 12c0 2.125.736 4.078 1.968 5.617L10.586 12zM12 3a8.96 8.96 0 0 0-5.618 1.968L12 10.586l5.617-5.618A8.96 8.96 0 0 0 12 3"/></svg>
    );
  },
);

SlashCircle02.displayName = 'SlashCircle02';
