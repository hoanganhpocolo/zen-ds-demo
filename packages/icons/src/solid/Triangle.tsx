import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Triangle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.402 3c1.155-2 4.04-2 5.196 0l8.227 14.25c1.155 2-.288 4.5-2.597 4.5H3.771c-2.309 0-3.752-2.5-2.597-4.5z"/></svg>
    );
  },
);

Triangle.displayName = 'Triangle';
