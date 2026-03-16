import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Award01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a8 8 0 0 1 5.07 14.189l.92 6.674a1 1 0 0 1-1.437 1.032L12 20.618l-4.553 2.277a1 1 0 0 1-1.437-1.032l.92-6.674A8 8 0 0 1 12 1m3.209 15.33c-.983.43-2.069.67-3.209.67s-2.226-.24-3.209-.67l-.541 3.927 3.303-1.652a1 1 0 0 1 .894 0l3.303 1.652zM12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12"/></svg>
    );
  },
);

Award01.displayName = 'Award01';
