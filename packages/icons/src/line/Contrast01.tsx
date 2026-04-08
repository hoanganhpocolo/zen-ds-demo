import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Contrast01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1C5.925 23 1 18.075 1 12S5.925 1 12 1m5.186 20.702q-.946.509-1.993.827l-.579-1.914a9 9 0 0 0 1.628-.675zM11 3.057C6.5 3.554 3 7.367 3 12s3.5 8.445 8 8.942zm9.503 15.922a11 11 0 0 1-1.524 1.524l-1.27-1.545a9 9 0 0 0 1.249-1.249zm2.026-3.786c-.21.697-.49 1.364-.827 1.993l-1.763-.944c.276-.515.504-1.06.676-1.628zm.42-4.27a11 11 0 0 1 0 2.154l-1.992-.193a9 9 0 0 0 0-1.768zm-1.247-4.11q.509.947.827 1.994l-1.914.579a9 9 0 0 0-.675-1.628zm-2.724-3.316c.557.457 1.068.968 1.525 1.524l-1.545 1.27a9 9 0 0 0-1.249-1.249zm-3.785-2.026c.697.21 1.364.49 1.993.827l-.944 1.763a9 9 0 0 0-1.628-.676z"/></svg>
    );
  },
);

Contrast01.displayName = 'Contrast01';
