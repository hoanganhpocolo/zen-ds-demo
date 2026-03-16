import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Unpin01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.492 19.842-1.414 1.414L15.822 17H13v6h-2v-6H4.724c-1.535 0-2.499-1.66-1.738-2.992l2.635-4.61c.22-.387.306-.836.243-1.276l-.18-1.26L2.4 3.58l1.414-1.415zM14.541 1a4 4 0 0 1 3.96 4.565l-.365 2.557c-.063.44.022.89.243 1.275l2.635 4.61a1.99 1.99 0 0 1-.228 2.306l-1.773-1.774-2.37-4.15a4 4 0 0 1-.488-2.55l.365-2.556A2 2 0 0 0 14.542 3H9.459c-.553 0-1.046.224-1.405.58L6.639 2.165A3.98 3.98 0 0 1 9.459 1zM7.835 9.014a4 4 0 0 1-.478 1.376L4.724 15h9.098z"/></svg>
    );
  },
);

Unpin01.displayName = 'Unpin01';
