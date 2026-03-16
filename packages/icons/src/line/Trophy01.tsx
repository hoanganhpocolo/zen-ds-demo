import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Trophy01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m13 17 .206.005A4 4 0 0 1 17 21a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2 4 4 0 0 1 3.794-3.995L11 17v-1H9a4 4 0 0 1-4-4v-.082a4.88 4.88 0 0 1-4-4.8V5.06C1 4.474 1.474 4 2.06 4H5V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1h2.94c.585 0 1.06.474 1.06 1.06v2.057a4.88 4.88 0 0 1-4 4.801V12a4 4 0 0 1-4 4h-2zm-2 2a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2zm-4-7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3H7zm4.629-6.075a.4.4 0 0 1 .742 0l.57 1.418a.4.4 0 0 0 .344.25l1.525.103a.4.4 0 0 1 .23.706l-1.174.98a.4.4 0 0 0-.13.405l.372 1.483a.4.4 0 0 1-.6.436l-1.295-.812a.4.4 0 0 0-.426 0l-1.295.812a.4.4 0 0 1-.6-.435l.373-1.484a.4.4 0 0 0-.131-.404l-1.174-.98a.4.4 0 0 1 .23-.707l1.525-.103a.4.4 0 0 0 .344-.25zM3 7.117c0 1.284.84 2.37 2 2.743V6H3zM19 9.86c1.16-.373 2-1.459 2-2.743V6h-2z"/></svg>
    );
  },
);

Trophy01.displayName = 'Trophy01';
