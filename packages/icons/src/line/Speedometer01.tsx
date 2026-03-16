import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Speedometer01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11a10.97 10.97 0 0 1-3.22 7.777A10.97 10.97 0 0 1 12 23c-2.789 0-5.338-1.04-7.276-2.75A10.98 10.98 0 0 1 1 12a10.97 10.97 0 0 1 3.223-7.78A10.97 10.97 0 0 1 12 1m1 4.5h-2V3.055a8.95 8.95 0 0 0-4.617 1.913l1.824 1.824-1.414 1.414-1.824-1.824A8.95 8.95 0 0 0 3.055 11h2.33v2h-2.33a8.96 8.96 0 0 0 2.322 5.094l1.202-1.201 1.414 1.414L6.89 19.41A8.95 8.95 0 0 0 11 20.945V18.5h2v2.445a8.95 8.95 0 0 0 4.618-1.914l-1.325-1.325 1.414-1.414 1.325 1.325A8.95 8.95 0 0 0 20.945 13H18.5v-2h2.445a8.96 8.96 0 0 0-1.925-4.633l-3.62 3.62c.349.59.55 1.278.55 2.013a3.94 3.94 0 0 1-1.129 2.765 3.95 3.95 0 1 1-.755-6.13l3.615-3.616A8.96 8.96 0 0 0 13 3.055zm-1 4.45a2.04 2.04 0 0 0-1.435.586A2.05 2.05 0 1 0 12 9.95"/></svg>
    );
  },
);

Speedometer01.displayName = 'Speedometer01';
