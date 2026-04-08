import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RefreshCw03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.22 2.248C18.675 3.258 22 7.24 22 12c0 2.52-1.157 4.591-2.613 6.314-.819.968-1.766 1.862-2.698 2.686H20v2h-6a1 1 0 0 1-1-1v-6h2v3.82c1.015-.882 2.012-1.794 2.86-2.797C19.155 15.492 20 13.864 20 12a8.004 8.004 0 0 0-6.222-7.802zM10 1a1 1 0 0 1 1 1v6H9V4.18c-1.015.882-2.012 1.794-2.86 2.798C4.845 8.508 4 10.136 4 12a8.004 8.004 0 0 0 6.22 7.802l-.442 1.95C5.325 20.742 2 16.76 2 12c0-2.52 1.156-4.592 2.612-6.314C5.431 4.718 6.378 3.824 7.31 3H4V1z"/></svg>
    );
  },
);

RefreshCw03.displayName = 'RefreshCw03';
