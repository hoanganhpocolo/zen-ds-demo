import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Unpin02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.549 6.135 17.865 16.45l4.035 4.034-1.415 1.415-3.226-3.227-.305 1.121c-.404 1.48-2.258 1.972-3.344.887l-4.438-4.438-4.242 4.242-1.415-1.414 4.243-4.242-4.439-4.438c-1.085-1.086-.593-2.94.888-3.344l1.12-.307L2.1 3.515 3.515 2.1zm4.404-3.281a4 4 0 0 1 6.029-.428l3.593 3.593a4 4 0 0 1-.427 6.028l-2.067 1.55c-.24.18-.433.41-.57.672l-8.78-8.78c.262-.137.494-.33.673-.569z"/></svg>
    );
  },
);

Unpin02.displayName = 'Unpin02';
