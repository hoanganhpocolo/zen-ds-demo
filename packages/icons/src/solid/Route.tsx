import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Route = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8M15.058 4c2.696 0 4.023 3.281 2.086 5.156l-8.397 8.125c-.646.625-.203 1.719.695 1.719H13v2H9.442c-2.696 0-4.023-3.281-2.086-5.156l8.397-8.125c.646-.625.203-1.719-.695-1.719H11V4zM5 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8"/></svg>
    );
  },
);

Route.displayName = 'Route';
