import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BezierCurve02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 1a1 1 0 0 1 1 1v.97A9.53 9.53 0 0 1 21.018 9H22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.963c-.454 1.395-1.237 2.643-2.318 3.727A9.35 9.35 0 0 1 15 21.007V22a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-.988a9.3 9.3 0 0 1-3.285-1.876A9.5 9.5 0 0 1 2.982 15H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.982a9.5 9.5 0 0 1 2.3-3.728A9.5 9.5 0 0 1 9 2.97V2a1 1 0 0 1 1-1zm-3 18v2h2v-2zm4-13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-.89A7.53 7.53 0 0 0 5.121 9H6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.879a7.5 7.5 0 0 0 1.919 2.637A7.3 7.3 0 0 0 9 18.877V18a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.872a7.3 7.3 0 0 0 2.303-1.558A7.5 7.5 0 0 0 18.9 15H18a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.879A7.54 7.54 0 0 0 15 5.11zM3 11v2h2v-2zm16 0v2h2v-2zm-8-8v2h2V3z"/></svg>
    );
  },
);

BezierCurve02.displayName = 'BezierCurve02';
