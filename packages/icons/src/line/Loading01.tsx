import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Loading01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 22h-2v-5.059h2zm-3.786-5.799-3.577 3.577-1.415-1.414 3.577-3.577zm10.564 2.163-1.414 1.414-2.837-2.837 1.414-1.414zM7.058 13H2v-2h5.059zM22 13h-3.059v-2H22zM9.213 7.799 7.799 9.213 4.222 5.636l1.414-1.414zm10.565-2.163L16.914 8.5 15.5 7.086l2.864-2.864zM13 7.059h-2V2h2z"/></svg>
    );
  },
);

Loading01.displayName = 'Loading01';
