import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ReceiptX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v17a1 1 0 0 1-1.64.769l-2.3-1.916-1.853 1.854a1 1 0 0 1-1.414 0L12 20.914l-1.793 1.793a1 1 0 0 1-1.414 0l-1.855-1.855-2.297 1.917A1 1 0 0 1 3 22V5a4 4 0 0 1 4-4zm-5 8.586L9.957 7.543 8.543 8.957 10.586 11l-2.043 2.043 1.414 1.414L12 12.414l2.043 2.043 1.414-1.414L13.414 11l2.043-2.043-1.414-1.414z"/></svg>
    );
  },
);

ReceiptX.displayName = 'ReceiptX';
