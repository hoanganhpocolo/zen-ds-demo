import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IceCreamBar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.09 2.938a5 5 0 0 1 6.857-.2l6.739 5.989a5 5 0 0 1 .38 7.096l1.42 1.42a3 3 0 0 1-4.131 4.349l-.112-.107-1.42-1.419a5 5 0 0 1-7.096-.38l-5.99-6.739a5 5 0 0 1 .201-6.856zm11.153 15.72 1.414 1.413.076.07a1.001 1.001 0 0 0 1.338-1.484l-1.414-1.414zM14.824 7.514a2.89 2.89 0 0 1-2.174 2.537.89.89 0 0 0-.668.919l.097 1.467a3 3 0 0 1-3.169 3.195l-1.173-.07 2.485 2.794a3 3 0 0 0 4.364.128l3.9-3.9a3 3 0 0 0-.128-4.363L14.86 7.113zM11.62 4.232a3 3 0 0 0-4.115.122l-3.151 3.15a3 3 0 0 0-.122 4.116l1.626 1.83 3.17.186a1 1 0 0 0 1.056-1.065l-.098-1.467a2.886 2.886 0 0 1 2.18-2.993.885.885 0 0 0 .666-.778l.17-1.872z"/></svg>
    );
  },
);

IceCreamBar.displayName = 'IceCreamBar';
