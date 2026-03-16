import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tomato = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g clipPath="url(#a)"><path fill="currentColor" d="M18.158 1.802A4 4 0 0 1 21.5 0h2v2h-2c-.74 0-1.384.403-1.73 1H22v2h-1.515A10.96 10.96 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1c1.242 0 2.435.208 3.548.587l1.222 1.71-3.949.72.358 1.966 2.925-.532-1.893 2.435 1.578 1.228 1.943-2.5.272 2.977 1.992-.182-.4-4.409H18.5a1 1 0 0 1-.814-.419l-2.5-3.5L16.815-.08z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    );
  },
);

Tomato.displayName = 'Tomato';
