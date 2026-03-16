import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Home03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M9.555 2.127a4 4 0 0 1 4.89 0l9.166 7.083-1.222 1.582L22 10.49V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.51l-.389.3L.39 9.21zM12 12.75A3.25 3.25 0 0 0 8.75 16v4h6.5v-4A3.25 3.25 0 0 0 12 12.75" clipRule="evenodd"/></svg>
    );
  },
);

Home03.displayName = 'Home03';
