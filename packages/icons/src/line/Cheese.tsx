import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Cheese = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.487 2.268a2.32 2.32 0 0 1 2.35 1.582l4.012 12.034a1 1 0 0 1 .049.316h.001v2.635a3 3 0 0 1-3.498 2.959L4.587 19.467a3 3 0 0 1-2.502-2.958v-3.98q0-.123.01-.245c-.001-.24.038-.486.123-.727q.115-.325.244-.642l.013-.034h.002c2-4.866 6.607-8.2 11.899-8.541zM4.085 16.508a1 1 0 0 0 .834.987l13.814 2.326a1 1 0 0 0 1.166-.986v-1.787L4.085 14.44zm10.42-12.172a11.83 11.83 0 0 0-10.17 7.284l-.197.589q-.02.061-.032.125c.02.053.067.095.128.105l15.193 2.504L15.94 4.481a.32.32 0 0 0-.324-.217zM16 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-5.5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
    );
  },
);

Cheese.displayName = 'Cheese';
