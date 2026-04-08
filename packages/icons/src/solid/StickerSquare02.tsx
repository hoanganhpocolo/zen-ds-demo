import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const StickerSquare02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v7.758a4 4 0 0 1-.457 1.852l-.038.073-.045.079q-.031.053-.065.106l-.045.072-.038.057a4 4 0 0 1-.293.38q-.031.04-.065.076-.06.068-.126.133l-4.242 4.242a4 4 0 0 1-.171.16q-.051.046-.104.088l-.1.081-.036.028a4 4 0 0 1-.178.128l-.057.037-.061.04-.117.07-.054.03a4 4 0 0 1-.163.086 4 4 0 0 1-.927.328l-.021.005q-.412.09-.84.091H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-1 13a2 2 0 0 0-2 2v2.565q.09-.07.172-.15l4.242-4.243q.08-.082.15-.172zM7 13a5 5 0 0 0 5 5h1v-2h-1a3 3 0 0 1-3-3zm1.5-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

StickerSquare02.displayName = 'StickerSquare02';
