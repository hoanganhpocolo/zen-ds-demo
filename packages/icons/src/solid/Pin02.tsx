import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pin02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.307 3a4 4 0 0 1 6.028-.428l3.594 3.593a4 4 0 0 1-.429 6.029l-2.065 1.549a2 2 0 0 0-.73 1.074l-1.397 5.123c-.405 1.481-2.26 1.973-3.345.888l-4.439-4.439-4.242 4.242-1.414-1.414 4.242-4.242-4.437-4.438c-1.086-1.086-.594-2.94.888-3.344l5.123-1.398a2 2 0 0 0 1.073-.73z"/></svg>
    );
  },
);

Pin02.displayName = 'Pin02';
