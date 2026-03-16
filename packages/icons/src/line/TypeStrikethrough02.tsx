import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TypeStrikethrough02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22.713 21.213-1.414 1.415-6.299-6.3V19h2v2H7v-2h2v-8.672l-4-4V8H3V5q.001-.306.088-.584L1.5 2.828l1.414-1.414zM11 19h2v-4.672l-2-2zm8-16a2 2 0 0 1 2 2v3h-2V5h-4v5.672l-2-2V5h-2v1.672L7.328 3z"/></svg>
    );
  },
);

TypeStrikethrough02.displayName = 'TypeStrikethrough02';
