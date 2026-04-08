import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignVerticalCenter02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 2a3 3 0 0 1 3 3v6h2V8a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3h2v2h-2v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-2.996-2.846L13 16v-3h-2v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6H1v-2h2V5a3 3 0 0 1 3-3zM6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm10 3a1 1 0 0 0-1 1v8l.005.102A1 1 0 0 0 16 17h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

AlignVerticalCenter02.displayName = 'AlignVerticalCenter02';
