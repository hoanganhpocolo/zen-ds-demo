import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LeftIndent02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2v-2h20zm0-5H2v-2h20zM2 4.135C2 2.44 3.978 1.514 5.28 2.6l3.44 2.864a2 2 0 0 1 0 3.073l-3.44 2.865C3.978 12.487 2 11.56 2 9.866zM22 11H12V9h10zm0-5H12V4h10z"/></svg>
    );
  },
);

LeftIndent02.displayName = 'LeftIndent02';
