import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const EyeOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M1.077 11.617c0 .002 0-.002 0 0m19.348 10.136 1.414-1.414L4.16 2.66 2.747 4.075l2.189 2.189c-.49.432-.929.884-1.316 1.33a16.4 16.4 0 0 0-2.383 3.66 10 10 0 0 0-.119.266l-.008.018-.024.057-.009.022-.004.012a1 1 0 0 0 0 .742l.004.012.033.079.008.018q.041.097.12.265a16.4 16.4 0 0 0 2.383 3.66c1.732 2 4.485 4.095 8.38 4.095 2.21 0 4.048-.678 5.544-1.627zM9 12c0-.486.116-.944.321-1.35l4.027 4.027A3 3 0 0 1 12 15a3 3 0 0 1-3-3" clipRule="evenodd"/><path fill="currentColor" d="M20.382 7.595C18.649 5.595 15.896 3.5 12 3.5c-1.309 0-2.49.237-3.545.627l12.086 12.086a16.5 16.5 0 0 0 1.755-2.556 15 15 0 0 0 .587-1.177l.008-.019.024-.056.009-.022a1 1 0 0 0 .004-.756l-.004-.01-.009-.023-.024-.055-.008-.02a15 15 0 0 0-.587-1.177 16.4 16.4 0 0 0-1.915-2.747"/></svg>
    );
  },
);

EyeOff.displayName = 'EyeOff';
