import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SocialIconsBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20.792 1.68H3.204c-.843 0-1.524.665-1.524 1.487v17.661c0 .823.681 1.492 1.524 1.492h17.588c.843 0 1.528-.67 1.528-1.488V3.167c0-.822-.685-1.487-1.528-1.487M7.804 19.268H4.74V9.416h3.064zM6.272 8.073a1.775 1.775 0 1 1-.007-3.549 1.775 1.775 0 0 1 .007 3.55m12.996 11.195h-3.06V14.48c0-1.14-.02-2.612-1.592-2.612-1.592 0-1.834 1.246-1.834 2.531v4.87H9.726V9.416h2.935v1.346h.04c.408-.774 1.407-1.592 2.895-1.592 3.1 0 3.672 2.04 3.672 4.692z"/></svg>
    );
  },
);

SocialIconsBlack.displayName = 'SocialIconsBlack';
