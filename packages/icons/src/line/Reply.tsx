import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Reply = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.742 2.315C11.322.754 14 1.872 14 4.093V7h1a8 8 0 0 1 8 8v4.039a1 1 0 0 1-1.835.55 5.75 5.75 0 0 0-4.804-2.59H14v2.908c0 2.22-2.679 3.339-4.258 1.777l-7.996-7.907a2.5 2.5 0 0 1 0-3.554zM12 4.093a.5.5 0 0 0-.852-.356l-7.996 7.908a.5.5 0 0 0 0 .71l7.996 7.908a.5.5 0 0 0 .852-.356V16a1 1 0 0 1 1-1h3.361c1.697 0 3.318.557 4.639 1.545V15a6 6 0 0 0-6-6h-2a1 1 0 0 1-1-1z"/></svg>
    );
  },
);

Reply.displayName = 'Reply';
