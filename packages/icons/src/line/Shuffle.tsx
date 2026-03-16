import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Shuffle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.707 5.293a1 1 0 0 1 0 1.414l-3.5 3.5-1.414-1.414L18.586 7H17.14a3 3 0 0 0-2.496 1.336L12.2 12l2.444 3.664A3 3 0 0 0 17.14 17h1.445l-1.793-1.793 1.414-1.414 3.5 3.5a1 1 0 0 1 0 1.414l-3.5 3.5-1.414-1.414L18.586 19H17.14a5 5 0 0 1-4.16-2.227L11 13.803l-1.98 2.97A5 5 0 0 1 4.86 19H2v-2h2.86a3 3 0 0 0 2.495-1.336L9.798 12 7.355 8.336A3 3 0 0 0 4.86 7H2V5h2.86a5 5 0 0 1 4.16 2.227l1.98 2.97 1.98-2.97A5 5 0 0 1 17.14 5h1.446l-1.793-1.793 1.414-1.414z"/></svg>
    );
  },
);

Shuffle.displayName = 'Shuffle';
