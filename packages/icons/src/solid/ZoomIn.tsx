import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZoomIn = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11 2a9 9 0 0 1 9 9 8.96 8.96 0 0 1-1.968 5.618L23 21.586 21.586 23l-4.968-4.968A8.96 8.96 0 0 1 11 20a9 9 0 1 1 0-18m-1 8H7v2h3v3h2v-3h3v-2h-3V7h-2z"/></svg>
    );
  },
);

ZoomIn.displayName = 'ZoomIn';
