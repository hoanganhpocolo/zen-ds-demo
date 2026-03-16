import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PieChart01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.077 0 11 4.934 11 11.018 0 3.032-1.106 5.67-3.22 7.789-4.06 4.066-10.756 4.277-15.057.473A11 11 0 0 1 1 12.018c0-3.042 1.232-5.799 3.222-7.791A10.96 10.96 0 0 1 12 1m-1 2.055A8.96 8.96 0 0 0 5.637 5.64 9 9 0 0 0 3 12.018a9 9 0 0 0 3.048 6.763c3.509 3.103 9.004 2.93 12.316-.387 1.505-1.508 2.377-3.304 2.586-5.376H12a1 1 0 0 1-1-1zm2 7.963h7.945c-.46-4.182-3.774-7.501-7.945-7.963z"/></svg>
    );
  },
);

PieChart01.displayName = 'PieChart01';
