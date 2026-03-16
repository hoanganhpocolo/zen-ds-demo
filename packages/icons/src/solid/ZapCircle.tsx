import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZapCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m.384 5.389c.026-.322-.404-.453-.56-.17l-3.948 7.103a.4.4 0 0 0 .395.592L12 13.5l-.39 4.29c-.028.31.381.451.551.189l4.387-6.78a.4.4 0 0 0-.375-.616L12 11z"/></svg>
    );
  },
);

ZapCircle.displayName = 'ZapCircle';
