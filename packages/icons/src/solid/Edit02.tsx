import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Edit02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M15.682 3.084a3.701 3.701 0 0 1 5.234 5.234L10.435 18.8a1 1 0 0 1-.394.243l-5.717 1.905a1.006 1.006 0 0 1-1.272-1.272l1.905-5.717c.05-.148.133-.283.243-.394zm3.811 1.423a1.69 1.69 0 0 0-2.388 0l-1.671 1.67 2.388 2.39 1.671-1.671c.66-.66.66-1.73 0-2.39" clipRule="evenodd"/></svg>
    );
  },
);

Edit02.displayName = 'Edit02';
