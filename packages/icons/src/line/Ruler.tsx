import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Ruler = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.414 2.1a3 3 0 0 1 4.242 0L21.9 6.344a3 3 0 0 1 0 4.243L10.586 21.899a3 3 0 0 1-4.243 0L2.1 17.656a3 3 0 0 1 0-4.242zm2.828 1.415a1 1 0 0 0-1.414 0l-1.414 1.414 2.828 2.828-1.414 1.415L12 6.342 9.879 8.465l2.828 2.829-1.414 1.414-2.83-2.828L6.344 12l2.828 2.828-1.414 1.414-2.828-2.828-1.414 1.414a1 1 0 0 0 0 1.414l4.242 4.243a1 1 0 0 0 1.414 0L20.485 9.171a1 1 0 0 0 0-1.414z"/></svg>
    );
  },
);

Ruler.displayName = 'Ruler';
