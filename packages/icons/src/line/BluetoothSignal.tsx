import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BluetoothSignal = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.5 4.135c0-1.695 1.978-2.621 3.28-1.536l3.439 2.865a2 2 0 0 1 0 3.073L10.062 12l4.157 3.464a2 2 0 0 1 0 3.072l-3.439 2.865c-1.302 1.085-3.28.159-3.28-1.536v-5.73l-4.36 3.633-1.28-1.537L6.937 12 1.859 7.768l1.282-1.537L7.5 9.865zm2 15.73 3.438-2.864L9.5 14.135zM21.765 6.6c1.488 3.19 1.686 7.398.299 10.801l-1.853-.756c1.168-2.864 1.004-6.49-.26-9.2zm-3.85 1.723c1.062 2.397 1.128 5.563.033 8.145l-1.84-.78c.877-2.071.817-4.661-.022-6.555zM9.5 9.865 12.938 7 9.5 4.135z"/></svg>
    );
  },
);

BluetoothSignal.displayName = 'BluetoothSignal';
