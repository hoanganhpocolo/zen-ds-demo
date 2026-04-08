import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Dropper = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.958 3.037a3.54 3.54 0 0 1 5.005 5.004l-3.722 3.724 1.506 1.507-1.417 1.418-1.507-1.508-6.73 6.73c-.11.11-.245.194-.393.243l-5.38 1.794a1.003 1.003 0 0 1-1.27-1.269l1.795-5.38c.05-.147.132-.281.242-.391l6.73-6.73L9.312 6.67l1.417-1.418 1.508 1.507zM5.672 16.157l-1.085 3.256 3.255-1.085 6.564-6.563-2.17-2.17z"/></svg>
    );
  },
);

Dropper.displayName = 'Dropper';
