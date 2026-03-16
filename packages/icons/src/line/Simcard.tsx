import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Simcard = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.172 1a3 3 0 0 1 2.121.879l4.828 4.828A3 3 0 0 1 21 8.828V19a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.828a1 1 0 0 0-.293-.707l-4.828-4.828A1 1 0 0 0 13.172 3zm9 9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm-7 5h6v-3H9z"/></svg>
    );
  },
);

Simcard.displayName = 'Simcard';
