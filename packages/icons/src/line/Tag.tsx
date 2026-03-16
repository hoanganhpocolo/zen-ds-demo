import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tag = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.586 1A2 2 0 0 1 13 1.586l9.5 9.5a2 2 0 0 1 0 2.828L13.914 22.5a2 2 0 0 1-2.828 0l-9.5-9.5A2 2 0 0 1 1 11.586V3a2 2 0 0 1 2-2zM3 11.586l9.5 9.5 8.586-8.586-9.5-9.5H3zM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4"/></svg>
    );
  },
);

Tag.displayName = 'Tag';
