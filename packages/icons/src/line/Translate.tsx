import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Translate = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.081 8.5a1 1 0 0 1 .896.555L23 21l-1.546 1-2.267-4h-6.213l-2.267 4-1.791-.89 6.27-12.055a1 1 0 0 1 .895-.555M8.247 2v2H14v2h-2.33a19.2 19.2 0 0 1-2.516 6.405q-.053.087-.108.172c.37.245.704.387.993.438l-.345 1.97c-.663-.116-1.28-.417-1.83-.793-1.534 1.843-3.588 3.434-6.274 4.263L1 16.545c2.267-.7 4.024-2.053 5.361-3.672a13 13 0 0 1-.502-.571C4.858 11.096 4.066 9.737 3.707 8.89l1.842-.78c.276.653.961 1.845 1.848 2.913l.15.178A17.3 17.3 0 0 0 9.63 6H1V4h5.247V2zm5.72 14h4.227l-2.113-4.253z"/></svg>
    );
  },
);

Translate.displayName = 'Translate';
