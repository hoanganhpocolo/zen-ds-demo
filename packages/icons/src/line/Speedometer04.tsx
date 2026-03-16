import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Speedometer04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.077 0 11 4.934 11 11.018 0 3.032-1.106 5.67-3.22 7.789-4.06 4.066-10.756 4.277-15.057.473A11 11 0 0 1 1 12.018c0-3.042 1.232-5.799 3.222-7.791A10.96 10.96 0 0 1 12 1m0 2a8.96 8.96 0 0 0-6.363 2.64A9 9 0 0 0 3 12.018a9 9 0 0 0 3.048 6.763c3.509 3.103 9.004 2.93 12.316-.387C20.106 16.648 21 14.517 21 12.018 21 7.036 16.969 3 12 3m0 4c-1.38 0-2.628.56-3.534 1.467A5 5 0 0 0 7 12.01c0 1.382.558 2.624 1.466 3.533L7.05 16.957A6.97 6.97 0 0 1 5 12.011c0-1.935.784-3.69 2.05-4.957A6.98 6.98 0 0 1 12 5zm7 5c0 1.935-.784 3.69-2.05 4.957l-1.416-1.413A5 5 0 0 0 17 12zm-1.815-3.828-2.894 2.893c.156.347.243.731.243 1.135a2.75 2.75 0 0 1-2.742 2.75A2.746 2.746 0 0 1 9.05 12.2a2.75 2.75 0 0 1 2.742-2.75c.417 0 .813.094 1.167.26l2.882-2.882zm-5.393 3.178a.85.85 0 0 0-.842.85c0 .473.38.85.842.85a.85.85 0 0 0 .843-.85.85.85 0 0 0-.843-.85"/></svg>
    );
  },
);

Speedometer04.displayName = 'Speedometer04';
