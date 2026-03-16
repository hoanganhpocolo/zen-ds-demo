import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignVerticalCenter02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 2a3 3 0 0 1 3 3v6h2V8a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v3h3v2h-3v3a3 3 0 0 1-3 3h-1a3 3 0 0 1-2.996-2.846L13 16v-3h-2v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6H1v-2h3V5a3 3 0 0 1 3-3z"/></svg>
    );
  },
);

AlignVerticalCenter02.displayName = 'AlignVerticalCenter02';
