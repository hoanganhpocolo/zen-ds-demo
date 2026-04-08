import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BracketsMinus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 4H6a2 2 0 0 0-2 2v3.37a2 2 0 0 1-.505 1.328L2.338 12l1.157 1.302A2 2 0 0 1 4 14.63V18a2 2 0 0 0 2 2h1v2H6a4 4 0 0 1-4-4v-3.37l-1.157-1.3a2 2 0 0 1 0-2.66L2 9.37V6a4 4 0 0 1 4-4h1zm11-2a4 4 0 0 1 4 4v3.37l1.157 1.3a2 2 0 0 1 0 2.66L22 14.63V18a4 4 0 0 1-4 4h-1v-2h1a2 2 0 0 0 2-2v-3.37a2 2 0 0 1 .505-1.328L21.662 12l-1.157-1.302A2 2 0 0 1 20 9.37V6a2 2 0 0 0-2-2h-1V2zm-2.5 11h-7v-2h7z"/></svg>
    );
  },
);

BracketsMinus.displayName = 'BracketsMinus';
