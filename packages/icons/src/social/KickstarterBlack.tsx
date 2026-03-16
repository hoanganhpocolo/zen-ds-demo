import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const KickstarterBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="m17.75 12.14 1.858-1.847a4.89 4.89 0 0 0 0-6.94 4.97 4.97 0 0 0-6.986 0l-.677.672a4.94 4.94 0 0 0-4.06-2.111c-2.726 0-4.938 2.196-4.938 4.904v10.633c0 2.708 2.212 4.904 4.938 4.904a4.94 4.94 0 0 0 4.06-2.111l.677.672a4.97 4.97 0 0 0 6.986 0 4.89 4.89 0 0 0 0-6.94z" clipRule="evenodd"/></svg>
    );
  },
);

KickstarterBlack.displayName = 'KickstarterBlack';
