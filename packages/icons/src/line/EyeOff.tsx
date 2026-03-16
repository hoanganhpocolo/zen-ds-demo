import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const EyeOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="m1.11 12.462-.01-.024zm-.03-.071c-.001-.003 0 .002 0 0m21.849-.021" clipRule="evenodd"/><path fill="currentColor" d="M20.382 7.595C18.649 5.595 15.896 3.5 12 3.5c-1.31 0-2.49.237-3.545.627l1.601 1.602A8.3 8.3 0 0 1 12 5.5c3.104 0 5.352 1.655 6.869 3.405a14.4 14.4 0 0 1 1.679 2.409c.151.273.268.508.353.686a13 13 0 0 1-.353.687 14.6 14.6 0 0 1-1.427 2.106l1.42 1.42a16.5 16.5 0 0 0 1.755-2.556 15 15 0 0 0 .587-1.177l.008-.019.024-.056.006-.016c0 .002.001-.002 0 0l.007-.018a1 1 0 0 0 0-.742l-.004-.012-.009-.023-.032-.075a15 15 0 0 0-.587-1.177 16.4 16.4 0 0 0-1.915-2.747"/><path fill="currentColor" fillRule="evenodd" d="m20.425 21.753 1.414-1.414L4.16 2.66 2.747 4.075l2.188 2.189c-.49.432-.928.884-1.315 1.33a16.4 16.4 0 0 0-2.383 3.66q-.078.17-.119.266l-.008.018-.024.057-.006.014-.007.019a1 1 0 0 0 0 .745l.007.018.006.014.024.057.008.018q.04.097.12.265a16.4 16.4 0 0 0 2.383 3.66c1.732 2 4.485 4.095 8.38 4.095 2.209 0 4.048-.678 5.544-1.627zM5.132 8.905c.364-.42.772-.834 1.222-1.222l2.233 2.232a4 4 0 0 0 5.497 5.497l2.003 2.003A8.2 8.2 0 0 1 12 18.5c-3.105 0-5.352-1.655-6.87-3.405A14.4 14.4 0 0 1 3.099 12a14.4 14.4 0 0 1 2.033-3.095M10 12a2 2 0 0 1 .087-.584l2.495 2.495A2 2 0 0 1 10 12" clipRule="evenodd"/></svg>
    );
  },
);

EyeOff.displayName = 'EyeOff';
