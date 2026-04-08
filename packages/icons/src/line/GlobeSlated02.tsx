import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GlobeSlated02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.276 1A10.98 10.98 0 0 1 23 9.25c0 5.738-4.394 10.45-10 10.955V21h2.5v2h-7v-2H11v-.795a10.96 10.96 0 0 1-6.04-2.502L2.415 20.25 1 18.836l5.394-5.395a7 7 0 1 1 1.414 1.415l-1.426 1.425A9 9 0 0 0 21 9.25c0-2.688-1.177-5.1-3.047-6.751zM12 4.25a5 5 0 1 0 0 10 5 5 0 0 0 0-10"/></svg>
    );
  },
);

GlobeSlated02.displayName = 'GlobeSlated02';
