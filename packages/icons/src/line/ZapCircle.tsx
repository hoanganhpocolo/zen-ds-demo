import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZapCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m.09 2.183c.795-1.021 2.43-.383 2.323.906l-.317 3.796 2.79-.279.118-.006c1.195-.027 1.887 1.401 1.071 2.326l-6.219 7.048c-.831.942-2.383.274-2.27-.978l.307-3.367-2.341.26c-1.23.137-2.02-1.273-1.26-2.25zm-3.347 7.561 2.147-.238 1.216-.135-.11 1.22-.223 2.454 3.792-4.297-2.465.247-1.197.12.1-1.198.22-2.648z"/></svg>
    );
  },
);

ZapCircle.displayName = 'ZapCircle';
