import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LayersTwo01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m23 15.508-9.249 4.502a4 4 0 0 1-3.5 0L1 15.508v-2.225l10.124 4.929a2 2 0 0 0 1.75 0L23 13.283zM10.25 3.99a4 4 0 0 1 3.501 0l8.14 3.962c1.499.73 1.499 2.866 0 3.596l-8.14 3.962a4 4 0 0 1-3.5 0l-8.14-3.962c-1.5-.73-1.5-2.866 0-3.596z"/></svg>
    );
  },
);

LayersTwo01.displayName = 'LayersTwo01';
