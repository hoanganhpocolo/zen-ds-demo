import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const YouTube = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#FF0302" d="M21.912 7a2.6 2.6 0 0 0-1.825-1.837c-1.613-.434-8.063-.434-8.063-.434s-6.45 0-8.064.434a2.6 2.6 0 0 0-1.825 1.836c-.431 1.621-.431 5-.431 5s0 3.38.431 5.001a2.6 2.6 0 0 0 1.825 1.837c1.614.434 8.064.434 8.064.434s6.45 0 8.063-.434A2.6 2.6 0 0 0 21.912 17c.432-1.62.432-5 .432-5s0-3.38-.432-5"/><path fill="#FEFEFE" d="M9.913 15.069V8.931L15.307 12z"/></svg>
    );
  },
);

YouTube.displayName = 'YouTube';
