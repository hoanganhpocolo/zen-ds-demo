import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Sale = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.082 1.358a3 3 0 0 1 4.033 1.67l.8 2.106 2.107.802a3 3 0 0 1 1.671 4.033l-.924 2.056.924 2.057a3 3 0 0 1-1.67 4.033l-2.107.8-.801 2.107a3 3 0 0 1-4.033 1.67l-2.057-.923-2.056.924a3 3 0 0 1-4.033-1.67l-.8-2.108-2.107-.8a3 3 0 0 1-1.67-4.033l.922-2.057-.923-2.056A3 3 0 0 1 3.03 5.936l2.106-.802.801-2.105A3 3 0 0 1 9.97 1.358l2.056.923zm1.775 12.57a1.364 1.364 0 1 0-1.929 1.93 1.364 1.364 0 0 0 1.93-1.93m-7.778.58 1.414 1.413 6.429-6.428-1.415-1.414zm1.993-6.365a1.364 1.364 0 1 0-1.929 1.93 1.364 1.364 0 0 0 1.929-1.93"/></svg>
    );
  },
);

Sale.displayName = 'Sale';
