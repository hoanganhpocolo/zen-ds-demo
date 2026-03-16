import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pin01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.542 1a4 4 0 0 1 3.96 4.565l-.366 2.557c-.063.44.023.89.243 1.275l2.635 4.61c.762 1.334-.202 2.993-1.737 2.993H13v6h-2v-6H4.724c-1.536 0-2.499-1.659-1.737-2.992l2.634-4.61c.221-.387.307-.836.244-1.276l-.366-2.557A4 4 0 0 1 9.46 1zM9.458 3a2 2 0 0 0-1.98 2.283l.366 2.557a4 4 0 0 1-.487 2.55L4.724 15h14.553l-2.634-4.61a4 4 0 0 1-.487-2.55l.365-2.557A2 2 0 0 0 14.541 3z"/></svg>
    );
  },
);

Pin01.displayName = 'Pin01';
