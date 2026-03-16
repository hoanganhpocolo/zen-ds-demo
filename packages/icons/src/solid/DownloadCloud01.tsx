import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const DownloadCloud01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m13 19.586 2.525-2.526 1.415 1.415-4.233 4.232a1 1 0 0 1-1.414 0l-4.232-4.232 1.414-1.415L11 19.586V13h2z"/><path fill="currentColor" d="M12 1c2.678 0 4.989 1.526 6.22 3.752 2.728.33 4.78 2.755 4.78 5.605C23 13.426 20.623 16 17.586 16H15v-3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3H6.414C3.377 16 1 13.425 1 10.357c0-2.85 2.052-5.276 4.78-5.605C7.01 2.526 9.321 1 12 1"/></svg>
    );
  },
);

DownloadCloud01.displayName = 'DownloadCloud01';
