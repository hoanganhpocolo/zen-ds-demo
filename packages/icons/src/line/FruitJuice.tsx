import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FruitJuice = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M1.793 5.015c4.686-4.686 12.285-4.687 16.97 0 4.687 4.686 4.687 12.284 0 16.97a1 1 0 0 1-1.413 0h-.001l-.002-.003-.008-.006-.03-.03L1.834 6.468l-.03-.03-.007-.007-.002-.002v-.001a1 1 0 0 1 0-1.414M4 22H2v-3h2zm8.262-7.93 4.223 4.223 1.536 1.536a9.98 9.98 0 0 0 2.22-7.179zM9 19H7v-3h2zm-5-4H2v-3h2zm8.26-2.96 7.613-1.355a9.95 9.95 0 0 0-2.523-4.256 10 10 0 0 0-3.553-2.291zm-.402-8.412a10 10 0 0 0-7.909 2.13l1.536 1.535 4.739 4.738z"/></svg>
    );
  },
);

FruitJuice.displayName = 'FruitJuice';
