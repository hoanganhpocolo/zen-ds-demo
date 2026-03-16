import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SunSetting02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.778 19.023a5.08 5.08 0 0 1 4.473 0L23 20.01l-.895 1.76-1.749-.99a3.05 3.05 0 0 0-2.683 0l-1.422.7a5.08 5.08 0 0 1-4.473 0l-1.422-.7a3.05 3.05 0 0 0-2.683 0l-1.247.614a5.07 5.07 0 0 1-4.809-.182L1 20.849l1.03-1.687.616.364c.88.52 1.968.56 2.885.11l1.247-.613a5.08 5.08 0 0 1 4.473 0l1.422.699a3.05 3.05 0 0 0 2.683 0zm0-4.238a5.08 5.08 0 0 1 4.473 0l1.749.99-.895 1.758-1.749-.988a3.05 3.05 0 0 0-2.683 0l-1.422.7a5.08 5.08 0 0 1-4.473 0l-1.422-.7a3.05 3.05 0 0 0-2.683 0l-1.247.613a5.07 5.07 0 0 1-4.809-.181L1 16.612l1.03-1.686.616.364c.88.519 1.968.56 2.885.108l1.247-.613a5.08 5.08 0 0 1 4.473 0l1.422.7a3.05 3.05 0 0 0 2.683 0zM3 13H1v-2h2zm9-7a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7m11 7h-2v-2h2zm-2.515-7.071-1.414 1.415-1.414-1.415 1.414-1.414zm-14.142 0L4.929 7.343 3.515 5.929l1.414-1.414zM13 4h-2V2h2z"/></svg>
    );
  },
);

SunSetting02.displayName = 'SunSetting02';
