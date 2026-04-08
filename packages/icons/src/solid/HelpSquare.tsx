import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const HelpSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-6 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a3.5 3.5 0 0 0-3.5 3.5h2a1.5 1.5 0 1 1 2.084 1.383C11.932 11.159 11 11.848 11 13v.5h2v-.495c-.001.013-.007-.008.045-.067a.9.9 0 0 1 .318-.213A3.502 3.502 0 0 0 12 6" clipRule="evenodd"/></svg>
    );
  },
);

HelpSquare.displayName = 'HelpSquare';
