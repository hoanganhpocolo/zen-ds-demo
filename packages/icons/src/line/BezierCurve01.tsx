import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BezierCurve01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 4a1 1 0 0 1 1 1v1h4.268A2 2 0 0 1 23 7a2 2 0 0 1-3.732 1h-1.53c1.537 1.296 2.937 3.239 3.213 6H22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.936c-.371-2.847-2.3-4.573-3.936-5.47V9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-.531c-.905.424-1.726.97-2.382 1.7-.797.885-1.403 2.098-1.571 3.831H6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.04c.177-2.217.95-3.9 2.092-5.169A8 8 0 0 1 5.999 8H4.732a2 2 0 1 1 0-2H9V5a1 1 0 0 1 1-1zM3 16v2h2v-2zm16 0v2h2v-2zM11 6v2h2V6z"/></svg>
    );
  },
);

BezierCurve01.displayName = 'BezierCurve01';
