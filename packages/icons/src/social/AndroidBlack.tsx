import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AndroidBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22.32 17.516H1.68c.33-3.498 2.33-6.487 5.283-8.087L5.25 6.463a.346.346 0 0 1 .126-.474.346.346 0 0 1 .474.126L7.585 9.12A10.6 10.6 0 0 1 12 8.178c1.602 0 3.092.337 4.415.941l1.735-3.004a.343.343 0 0 1 .472-.126.35.35 0 0 1 .125.474L17.036 9.43c2.955 1.6 4.955 4.589 5.285 8.087m-5.584-2.898a.864.864 0 1 0 0-1.73.865.865 0 0 0 0 1.73m-9.475 0a.864.864 0 1 0 0-1.73.865.865 0 0 0 0 1.73"/></svg>
    );
  },
);

AndroidBlack.displayName = 'AndroidBlack';
