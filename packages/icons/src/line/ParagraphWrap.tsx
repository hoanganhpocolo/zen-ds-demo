import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ParagraphWrap = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 10a4 4 0 0 1 0 8h-2.586L18 19.586 16.586 21l-3.293-3.293a1 1 0 0 1 0-1.414L16.586 13 18 14.414 16.414 16H19a2 2 0 1 0 0-4H1v-2zm-8.5 8H1v-2h9.5zM23 6H1V4h22z"/></svg>
    );
  },
);

ParagraphWrap.displayName = 'ParagraphWrap';
