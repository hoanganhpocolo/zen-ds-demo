import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const StickerSquare02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v7.758a4 4 0 0 1-1.172 2.828l-4.242 4.242A4 4 0 0 1 13.758 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v-2h-1a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3h1.126c.444-1.725 2.01-3 3.874-3h3V6a2 2 0 0 0-2-2zm11 11a2 2 0 0 0-2 2v2.565q.09-.07.172-.15l4.242-4.243q.08-.081.151-.172zM8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
    );
  },
);

StickerSquare02.displayName = 'StickerSquare02';
