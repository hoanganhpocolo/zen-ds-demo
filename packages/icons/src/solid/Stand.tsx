import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Stand = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 3h6a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-1.586l3.293 3.293-1.414 1.414L14.586 18H13v5h-2v-5H9.414l-4.707 4.707-1.414-1.414L6.586 18H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h6V1h2zM5 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm14 9H5V7h14z"/></svg>
    );
  },
);

Stand.displayName = 'Stand';
