import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Ruler = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.414 2.1a3 3 0 0 1 4.243 0L21.9 6.344a3 3 0 0 1 0 4.243L10.586 21.9a3 3 0 0 1-4.243 0l-4.242-4.243a3 3 0 0 1 0-4.243zM4.93 13.415l2.828 2.829 1.414-1.415L6.343 12zM8.464 9.88l2.83 2.828 1.413-1.414-2.827-2.83zM12 6.343l2.828 2.83 1.415-1.416-2.829-2.828z"/></svg>
    );
  },
);

Ruler.displayName = 'Ruler';
