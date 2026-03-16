import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pizza = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.783 1.015a1 1 0 0 1 .803.76l.629 2.725 3.76 16.275a1 1 0 0 1-1.2 1.2L3.567 18l-1.792-.414A1 1 0 0 1 1 16.612C1 7.99 7.99 1 16.612 1zM17.5 15a1.5 1.5 0 1 0 1.483 1.71l-.244-1.056A1.5 1.5 0 0 0 17.5 15m-5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3.69-9.38c-6.008.805-10.765 5.562-11.57 11.57l2.942.68a10.5 10.5 0 0 1 9.307-9.308zM15.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

Pizza.displayName = 'Pizza';
