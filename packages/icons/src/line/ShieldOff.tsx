import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShieldOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.9 21.214-1.415 1.414-2.896-2.897a9 9 0 0 1-.458.31l-4.6 2.875a1 1 0 0 1-1.061 0l-4.6-2.875a9 9 0 0 1-4.2-6.885l-.536-6.439a3 3 0 0 1 .508-1.933L.687 2.829 2.1 1.415zM4.142 6.284a1 1 0 0 0-.016.267l.537 6.439a7 7 0 0 0 3.266 5.354L12 20.888l4.07-2.544.08-.052zm6.909-4.954a3 3 0 0 1 1.896 0l6.877 2.293a3 3 0 0 1 2.041 3.094l-.537 6.439a9 9 0 0 1-1.08 3.579l-1.491-1.491a7 7 0 0 0 .578-2.254l.537-6.439a1 1 0 0 0-.68-1.032l-6.877-2.292a1 1 0 0 0-.632 0L7.977 4.463 6.396 2.88z"/></svg>
    );
  },
);

ShieldOff.displayName = 'ShieldOff';
