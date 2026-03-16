import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FigmaBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M4.825 5.542A3.86 3.86 0 0 1 8.687 1.68h6.626a3.862 3.862 0 0 1 2.118 7.09 3.862 3.862 0 0 1-2.118 7.09h-.084c-1 .002-1.91-.378-2.596-1.002v3.558c0 2.162-1.775 3.904-3.925 3.904-2.128 0-3.883-1.724-3.883-3.862 0-1.35.693-2.539 1.743-3.229A3.86 3.86 0 0 1 4.825 12c0-1.35.694-2.539 1.744-3.23a3.86 3.86 0 0 1-1.744-3.228m6.543 6.45v2.605H8.673a2.597 2.597 0 0 1 .014-5.194h2.68zm1.265.015a2.597 2.597 0 0 0 2.596 2.59h.084a2.597 2.597 0 0 0 0-5.194h-.084a2.597 2.597 0 0 0-2.596 2.59zm-3.946 3.855h-.014a2.597 2.597 0 0 0-2.583 2.596c0 1.43 1.178 2.597 2.618 2.597 1.462 0 2.66-1.187 2.66-2.639v-2.554zm0-12.917h2.68v5.193h-2.68a2.597 2.597 0 0 1 0-5.193m3.946 0v5.193h2.68a2.597 2.597 0 0 0 0-5.193z" clipRule="evenodd"/></svg>
    );
  },
);

FigmaBlack.displayName = 'FigmaBlack';
