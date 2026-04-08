import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileLock = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.5 13.795a3 3 0 0 1 3 3V18h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-1.205a3 3 0 0 1 3-3M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V11h-2V9.242q-.001-.122-.017-.242H17a4 4 0 0 1-4-4V3.016A2 2 0 0 0 12.758 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4v2H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM15 22h5v-2h-5zm2.5-6.205a1 1 0 0 0-1 1V18h2v-1.205a1 1 0 0 0-1-1M15 5a2 2 0 0 0 2 2h.586L15 4.414z"/></svg>
    );
  },
);

FileLock.displayName = 'FileLock';
