import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Signal01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.636 5.634a9 9 0 0 0 0 12.727l-1.414 1.414A11 11 0 0 1 1.837 7.788 11 11 0 0 1 4.222 4.22zM19.778 4.22a11 11 0 0 1 2.385 11.987 11 11 0 0 1-2.385 3.568l-1.414-1.414a9.003 9.003 0 0 0 0-12.727zM8.465 8.462a5.003 5.003 0 0 0 0 7.071L7.05 16.947a7.004 7.004 0 0 1 0-9.9zm8.485-1.414a7.003 7.003 0 0 1 0 9.9l-1.415-1.415a5 5 0 0 0 0-7.071zM12 8.998a3 3 0 1 1 0 6 3 3 0 0 1 0-6"/></svg>
    );
  },
);

Signal01.displayName = 'Signal01';
