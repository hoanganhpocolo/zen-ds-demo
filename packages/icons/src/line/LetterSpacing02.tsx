import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LetterSpacing02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22.707 17.293a1 1 0 0 1 0 1.414L19.414 22 18 20.586 19.586 19H4.414L6 20.586 4.586 22l-3.293-3.293a1 1 0 0 1 0-1.414L4.586 14 6 15.414 4.414 17h15.172L18 15.414 19.414 14zM18 4h-5v10h-2V4H6V2h12z"/></svg>
    );
  },
);

LetterSpacing02.displayName = 'LetterSpacing02';
