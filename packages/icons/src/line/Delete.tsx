import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Delete = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9.5a4 4 0 0 1-3.2-1.6l-4.65-6.2a2 2 0 0 1 0-2.4L6.3 4.6A4 4 0 0 1 9.5 3zM9.5 5a2 2 0 0 0-1.6.8L3.25 12l4.65 6.2a2 2 0 0 0 1.6.8H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm7.915 4.707L15.122 12l2.293 2.293L16 15.707l-2.293-2.293-2.293 2.293L10 14.293 12.293 12 10 9.707l1.415-1.414 2.292 2.293L16 8.293z"/></svg>
    );
  },
);

Delete.displayName = 'Delete';
