import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SunSetting01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 22H4v-2h16zm2-4H2v-2h20zM3 14H1v-2h2zm9-8a7 7 0 0 1 6.928 8h-2.029q.1-.486.101-1a5 5 0 1 0-9.9 1H5.073A7 7 0 0 1 12 6m11 8h-2v-2h2zm-2.515-8.071-1.414 1.415-1.414-1.415 1.414-1.414zm-14.142 0L4.929 7.343 3.515 5.929l1.414-1.414zM13 4h-2V2h2z"/></svg>
    );
  },
);

SunSetting01.displayName = 'SunSetting01';
