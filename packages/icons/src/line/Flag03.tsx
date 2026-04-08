import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Flag03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 2c1.306 0 2.414.835 2.826 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a3 3 0 0 1-2.83-2.01q-.084.01-.17.01H4v6H2V3a1 1 0 0 1 1-1zm3 13a1 1 0 0 0 1 1h6V6h-7zm-9-1h7V5a1 1 0 0 0-1-1H4z"/></svg>
    );
  },
);

Flag03.displayName = 'Flag03';
