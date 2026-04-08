import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const StickerSquare01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.758 2q.427 0 .839.09l.021.005a4 4 0 0 1 1.25.509l.072.045.057.038a4 4 0 0 1 .178.127l.036.028a4 4 0 0 1 .167.137l.075.066q.068.061.133.127l4.242 4.242a4 4 0 0 1 .483.586l.039.06.038.058.072.12.03.053.053.098.014.025c.288.56.443 1.186.443 1.828V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM15 7a2 2 0 0 0 2 2h2.564a2 2 0 0 0-.15-.172l-4.242-4.242A2 2 0 0 0 15 4.435z"/></svg>
    );
  },
);

StickerSquare01.displayName = 'StickerSquare01';
