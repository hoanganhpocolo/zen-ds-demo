import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ParagraphSpacing = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.293 2.293a1 1 0 0 1 1.414 0L10 5.586 8.586 7 7 5.414v13.172L8.586 17 10 18.414l-3.293 3.293a1 1 0 0 1-1.414 0L2 18.414 3.414 17 5 18.586V5.414L3.414 7 2 5.586zM22 19H12v-2h10zm0-4H12v-2h10zm0-4H12V9h10zm0-4H12V5h10z"/></svg>
    );
  },
);

ParagraphSpacing.displayName = 'ParagraphSpacing';
