import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PenTool = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6 22H0v-2h6zM17.697.628c.265 0 .52.106.707.294l4.733 4.732a1 1 0 0 1 0 1.414l-1.435 1.434a9.37 9.37 0 0 1-2.706 7.44l-.96.96a1.84 1.84 0 0 1-1.178.534l-8.558.57c-.247.017-.49-.06-.683-.21l4.866-4.866q.248.068.517.07a2 2 0 1 0-1.93-1.484l-4.857 4.856a1 1 0 0 1-.161-.612l.571-8.56.019-.165c.06-.381.24-.736.514-1.012l.961-.96a9.37 9.37 0 0 1 7.438-2.707L16.99.922a1 1 0 0 1 .707-.294"/></svg>
    );
  },
);

PenTool.displayName = 'PenTool';
