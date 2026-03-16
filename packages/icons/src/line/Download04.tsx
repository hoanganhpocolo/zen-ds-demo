import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Download04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.725 2.5c1.619-.879 3.263-.522 4.435.47C12.295 3.933 13 5.483 13 7.12v7.53l2.793-2.772 1.414 1.403-4.5 4.466a1.005 1.005 0 0 1-1.414 0l-4.5-4.466 1.414-1.403L11 14.649V7.121c0-1.102-.482-2.085-1.139-2.642-.62-.525-1.373-.673-2.175-.237C4.89 5.76 3 8.703 3 12.082c0 4.934 4.03 8.933 9 8.933s9-4 9-8.932c0-3.486-2.012-6.507-4.95-7.98l.9-1.771C20.537 4.128 23 7.819 23 12.082 23 18.113 18.075 23 12 23S1 18.112 1 12.083C1 7.949 3.315 4.353 6.725 2.5"/></svg>
    );
  },
);

Download04.displayName = 'Download04';
