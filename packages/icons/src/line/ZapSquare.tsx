import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZapSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm6.09 1.183c.795-1.021 2.43-.383 2.323.906l-.317 3.796 2.79-.279.118-.006c1.195-.027 1.887 1.401 1.071 2.326l-6.219 7.048c-.831.942-2.383.274-2.27-.978l.307-3.367-2.341.26c-1.23.137-2.02-1.273-1.26-2.25zm-3.347 7.561 2.147-.238 1.216-.135-.11 1.22-.223 2.454 3.792-4.297-2.465.247-1.197.12.1-1.198.22-2.648z"/></svg>
    );
  },
);

ZapSquare.displayName = 'ZapSquare';
