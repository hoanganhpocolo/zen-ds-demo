import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PenToolPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g clipPath="url(#a)"><path fill="currentColor" d="M4 20h2v2H4v2H2v-2H0v-2h2v-2h2zM17.697.629c.265 0 .52.105.707.293l4.733 4.732a1 1 0 0 1 0 1.414l-1.435 1.434a9.37 9.37 0 0 1-2.706 7.44l-.96.96a1.84 1.84 0 0 1-1.178.534l-8.558.57c-.247.017-.49-.06-.683-.21l4.866-4.866a2 2 0 1 0-1.414-1.414l-4.856 4.856a1 1 0 0 1-.161-.612l.571-8.56.019-.165c.06-.381.24-.736.514-1.012l.961-.96a9.37 9.37 0 0 1 7.438-2.707L16.99.922c.188-.187.442-.293.707-.293"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    );
  },
);

PenToolPlus.displayName = 'PenToolPlus';
