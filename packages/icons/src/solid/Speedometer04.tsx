import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Speedometer04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.077 0 11 4.934 11 11.018 0 3.032-1.106 5.67-3.22 7.789-4.06 4.066-10.756 4.277-15.057.473A11 11 0 0 1 1 12.018c0-3.042 1.232-5.799 3.222-7.791A10.96 10.96 0 0 1 12 1m0 4a6.98 6.98 0 0 0-4.95 2.054A7 7 0 0 0 5 12.01c0 1.937.786 3.68 2.05 4.946l1.416-1.413A4.97 4.97 0 0 1 7 12.01c0-1.385.56-2.636 1.466-3.544A4.98 4.98 0 0 1 12 7zm5 7c0 1.385-.56 2.636-1.466 3.544l1.416 1.413A7 7 0 0 0 19 12zm-4.041-2.29a2.73 2.73 0 0 0-3.088.526A2.75 2.75 0 0 0 9.05 12.2a2.746 2.746 0 0 0 2.742 2.75 2.75 2.75 0 0 0 2.742-2.75 2.8 2.8 0 0 0-.243-1.135l2.894-2.893-1.344-1.344zm-1.167 1.64a.85.85 0 0 1 .843.85.85.85 0 0 1-.843.85.846.846 0 0 1-.842-.85.85.85 0 0 1 .842-.85"/></svg>
    );
  },
);

Speedometer04.displayName = 'Speedometer04';
