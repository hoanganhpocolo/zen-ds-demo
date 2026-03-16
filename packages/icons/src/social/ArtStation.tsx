import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArtStation = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#13AFF0" d="M21.285 16.45c0-.37-.105-.72-.298-1.019l-6.108-10.6a1.86 1.86 0 0 0-1.65-1H10l9.425 16.322 1.492-2.58c.28-.492.368-.703.368-1.124m-18.569-.017 1.562 2.703a1.89 1.89 0 0 0 1.668 1.035h10.408l-2.16-3.738zM8.473 6.48l4.195 7.284H4.26z"/></svg>
    );
  },
);

ArtStation.displayName = 'ArtStation';
