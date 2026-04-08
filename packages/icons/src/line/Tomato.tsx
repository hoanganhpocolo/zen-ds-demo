import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tomato = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g clipPath="url(#a)"><path fill="currentColor" d="M18.158 1.802A4 4 0 0 1 21.5 0h2v2h-2c-.74 0-1.384.403-1.73 1H22v2h-1.515A10.96 10.96 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1c1.242 0 2.435.208 3.548.587l-.361-.506L16.814-.08zM12 3a9 9 0 1 0 7.828 4.56l.168 1.85-1.992.18-.272-2.976-1.943 2.5-1.578-1.228 1.893-2.435-2.925.532-.358-1.966 2.371-.433A9 9 0 0 0 12 3"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    );
  },
);

Tomato.displayName = 'Tomato';
