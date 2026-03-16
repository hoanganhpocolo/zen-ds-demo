import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Plane = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.217 2.36a3.855 3.855 0 1 1 5.443 5.444l-2.818 2.548 2.162 8.959a1 1 0 0 1-.266.941l-2.474 2.475a1 1 0 0 1-1.551-.17l-4.15-6.524-1.785 1.614V19.9a1 1 0 0 1-.293.706l-2.12 2.122a1 1 0 0 1-1.565-.193l-1.992-3.321-3.322-1.993a1 1 0 0 1-.193-1.564l2.122-2.122c.188-.187.442-.292.707-.292l2.25-.002 1.612-1.784-6.521-4.148a1.002 1.002 0 0 1-.17-1.551L3.769 3.28a1 1 0 0 1 .941-.264l8.956 2.16zm4.168 1.275a1.854 1.854 0 0 0-2.686.067L14.751 6.96a1 1 0 0 1-.976.3l-8.99-2.167L3.59 6.289l6.47 4.116.09.065a1 1 0 0 1 .115 1.45l-2.707 2.992c-.19.21-.46.33-.742.33H4.537l-.925.923 2.439 1.462.1.07a1 1 0 0 1 .242.273l1.463 2.437.922-.923v-2.28a1 1 0 0 1 .33-.741l2.99-2.707.087-.07a1 1 0 0 1 1.43.274l4.117 6.47 1.196-1.196-2.17-8.99a1 1 0 0 1 .3-.976l3.26-2.948a1.854 1.854 0 0 0 .067-2.685"/></svg>
    );
  },
);

Plane.displayName = 'Plane';
