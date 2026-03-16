import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LetterSpacing01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 22H2V2h2zm18 0h-2V2h2zM12.356 5.125a1 1 0 0 1 .9.587l3.182 7 .016.039 1.819 4.5-1.855.749-1.565-3.875H9.628L7.805 18 6 17.137l5.443-11.443c.168-.35.524-.573.912-.569m-1.772 7h3.39l-1.652-3.634z"/></svg>
    );
  },
);

LetterSpacing01.displayName = 'LetterSpacing01';
