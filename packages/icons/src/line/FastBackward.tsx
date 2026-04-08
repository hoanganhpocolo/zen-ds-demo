import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FastBackward = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.38 4.839c1.625-1.38 4.12-.226 4.12 1.905v10.513c0 2.13-2.495 3.284-4.12 1.904l-5.88-4.999v3.095c0 2.13-2.496 3.284-4.12 1.904l-6.183-5.256a2.5 2.5 0 0 1 0-3.81L8.381 4.84c1.624-1.38 4.119-.226 4.119 1.905v3.094zM10.5 6.744a.5.5 0 0 0-.824-.382L3.492 11.62a.5.5 0 0 0 0 .762l6.184 5.257a.5.5 0 0 0 .824-.381zm10 0a.5.5 0 0 0-.824-.382l-6.184 5.257a.5.5 0 0 0 0 .762l6.184 5.257a.5.5 0 0 0 .824-.381z"/></svg>
    );
  },
);

FastBackward.displayName = 'FastBackward';
