import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LayerSingle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.25 6.24a4 4 0 0 1 3.5 0l8.14 3.962c1.5.73 1.5 2.867 0 3.597l-8.14 3.962a4 4 0 0 1-3.5 0l-8.14-3.962c-1.5-.73-1.5-2.867 0-3.597z"/></svg>
    );
  },
);

LayerSingle.displayName = 'LayerSingle';
