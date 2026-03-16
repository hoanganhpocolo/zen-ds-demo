import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VKOnlysignBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.922 18.437c-7.052 0-11.074-4.834-11.242-12.879h3.532c.116 5.905 2.72 8.406 4.783 8.921V5.56h3.327v5.091c2.036-.219 4.176-2.54 4.898-5.092h3.326c-.554 3.146-2.874 5.466-4.525 6.42 1.65.774 4.293 2.798 5.3 6.46h-3.662c-.787-2.45-2.746-4.345-5.337-4.603v4.602z"/></svg>
    );
  },
);

VKOnlysignBlack.displayName = 'VKOnlysignBlack';
