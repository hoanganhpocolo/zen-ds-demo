import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const DownloadCloud01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m13 19.586 2.525-2.526 1.415 1.415-4.233 4.232a1 1 0 0 1-1.414 0L7.06 18.475l1.415-1.415L11 19.586V13h2z"/><path fill="currentColor" d="M12 1c2.678 0 4.989 1.526 6.22 3.752 2.728.33 4.78 2.755 4.78 5.605C23 13.426 20.623 16 17.586 16v-2C19.424 14 21 12.417 21 10.357s-1.575-3.643-3.414-3.643a1 1 0 0 1-.912-.588C15.829 4.255 14.037 3 12 3S8.171 4.255 7.326 6.126a1 1 0 0 1-.912.588C4.575 6.714 3 8.298 3 10.357 3 12.417 4.576 14 6.414 14v2C3.377 16 1 13.425 1 10.357c0-2.85 2.052-5.276 4.78-5.605C7.01 2.526 9.321 1 12 1"/></svg>
    );
  },
);

DownloadCloud01.displayName = 'DownloadCloud01';
