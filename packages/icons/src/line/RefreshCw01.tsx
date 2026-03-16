import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RefreshCw01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.048 2c2.736 0 5.22 1.09 7.031 2.856l.01.01L20 6.835V3.5h2V9a1 1 0 0 1-1 1h-5.5V8h3l-1.827-1.72A8.04 8.04 0 0 0 11.048 4C6.598 4 3 7.587 3 12s3.598 8 8.048 8a8.04 8.04 0 0 0 5.635-2.29 8 8 0 0 0 1.744-2.512l1.83.804A10.04 10.04 0 0 1 11.048 22C5.505 22 1 17.528 1 12S5.504 2 11.048 2"/></svg>
    );
  },
);

RefreshCw01.displayName = 'RefreshCw01';
