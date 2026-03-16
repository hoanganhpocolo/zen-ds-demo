import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Target03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g fill="currentColor" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd"><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/><path d="M13 2.05A10 10 0 0 1 21.95 11H24v2h-2.05A10 10 0 0 1 13 21.95V24h-2v-2.05A10 10 0 0 1 2.05 13H0v-2h2.05A10 10 0 0 1 11 2.05V0h2zM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    );
  },
);

Target03.displayName = 'Target03';
