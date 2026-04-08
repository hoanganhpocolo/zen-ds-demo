import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZapSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-5.616 4.389c.026-.322-.404-.453-.56-.17l-3.948 7.103a.4.4 0 0 0 .395.592L12 13.5l-.39 4.29c-.028.31.381.451.551.189l4.387-6.78a.4.4 0 0 0-.375-.616L12 11z"/></svg>
    );
  },
);

ZapSquare.displayName = 'ZapSquare';
