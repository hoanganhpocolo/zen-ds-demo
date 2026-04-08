import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TypeStrikethrough01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22.713 21.213-1.414 1.415-8.299-8.3V19h3v2H8v-2h3v-6.672l-6-6V8H3V6c0-.486.117-.944.322-1.35L1.5 2.828l1.414-1.414zM18 3a3 3 0 0 1 3 3v2h-2V6a1 1 0 0 0-1-1h-5v3.672l-2-2V5H9.328l-2-2z"/></svg>
    );
  },
);

TypeStrikethrough01.displayName = 'TypeStrikethrough01';
