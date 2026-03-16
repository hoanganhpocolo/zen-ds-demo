import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MoonEclipse = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c1.726 0 3.363.399 4.82 1.11a1 1 0 0 1-.481 1.897 8 8 0 1 0 0 15.986 1 1 0 0 1 .48 1.898A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1m-.38 2.008a9 9 0 0 0 0 17.984A10 10 0 0 1 6 12c0-3.952 2.293-7.368 5.62-8.992m8.08 1.137A10.97 10.97 0 0 1 23 12c0 2.789-1.04 5.338-2.75 7.276l-1.5-1.323A8.96 8.96 0 0 0 21 12a8.97 8.97 0 0 0-2.7-6.428z"/></svg>
    );
  },
);

MoonEclipse.displayName = 'MoonEclipse';
