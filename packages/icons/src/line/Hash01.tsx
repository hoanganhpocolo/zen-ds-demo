import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hash01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M9 2v5h6V2h2v5h4v2h-4v6h4v2h-4v5h-2v-5H9v5H7v-5H3v-2h4V9H3V7h4V2zm0 13h6V9H9z" clipRule="evenodd"/></svg>
    );
  },
);

Hash01.displayName = 'Hash01';
