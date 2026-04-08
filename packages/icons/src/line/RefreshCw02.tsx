import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RefreshCw02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 13v2H4.18c.882 1.015 1.794 2.012 2.798 2.86C8.508 19.155 10.136 20 12 20a8.004 8.004 0 0 0 7.802-6.222l1.95.444C20.742 18.675 16.76 22 12 22c-2.52 0-4.592-1.156-6.314-2.612-.968-.819-1.862-1.767-2.686-2.699V20H1v-6a1 1 0 0 1 1-1zm4-11c2.52 0 4.591 1.156 6.314 2.612.968.819 1.862 1.767 2.686 2.699V4h2v6a1 1 0 0 1-1 1h-6V9h3.82c-.882-1.015-1.794-2.012-2.797-2.86C15.492 4.845 13.865 4 12 4a8.004 8.004 0 0 0-7.802 6.222l-1.95-.444C3.258 5.325 7.24 2 12 2"/></svg>
    );
  },
);

RefreshCw02.displayName = 'RefreshCw02';
