import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PieChart03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11a11 11 0 1 1-22 0C1 5.925 5.925 1 12 1m-1 2.055a9.002 9.002 0 1 0 4.132 17.385L11 12.237zm5.918 16.484A9 9 0 0 0 20.945 13h-7.322zM13 11h7.945A9.004 9.004 0 0 0 13 3.055z"/></svg>
    );
  },
);

PieChart03.displayName = 'PieChart03';
