import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Trophy01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.75 18A3.25 3.25 0 0 1 17 21.25 1.75 1.75 0 0 1 15.25 23h-6.5A1.75 1.75 0 0 1 7 21.25 3.25 3.25 0 0 1 10.25 18H11v-2H9a4 4 0 0 1-4-4v-.082a4.88 4.88 0 0 1-4-4.8V5.06C1 4.474 1.474 4 2.06 4H5V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1h2.94c.585 0 1.06.474 1.06 1.06v2.057a4.88 4.88 0 0 1-4 4.801V12a4 4 0 0 1-4 4h-2v2zM12.371 5.925a.4.4 0 0 0-.742 0l-.57 1.418a.4.4 0 0 1-.344.25l-1.526.103a.4.4 0 0 0-.229.706l1.174.98a.4.4 0 0 1 .13.405l-.372 1.483a.4.4 0 0 0 .6.436l1.295-.812a.4.4 0 0 1 .426 0l1.295.812a.4.4 0 0 0 .6-.435l-.373-1.484a.4.4 0 0 1 .131-.404l1.174-.98a.4.4 0 0 0-.23-.707l-1.525-.103a.4.4 0 0 1-.344-.25zM3 7.117c0 1.284.84 2.37 2 2.743V6H3zM19 9.86c1.16-.373 2-1.459 2-2.743V6h-2z"/></svg>
    );
  },
);

Trophy01.displayName = 'Trophy01';
