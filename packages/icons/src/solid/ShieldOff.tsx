import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShieldOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.9 21.214-1.415 1.414-2.896-2.897q-.224.162-.458.31l-4.6 2.875a1 1 0 0 1-1.061 0l-4.6-2.875a9 9 0 0 1-4.2-6.885l-.536-6.439a3 3 0 0 1 .508-1.933L.687 2.829 2.1 1.415zM11.051 1.33a3 3 0 0 1 1.896 0l6.877 2.293a3 3 0 0 1 2.041 3.094l-.537 6.439a9 9 0 0 1-1.08 3.579L6.396 2.882z"/></svg>
    );
  },
);

ShieldOff.displayName = 'ShieldOff';
