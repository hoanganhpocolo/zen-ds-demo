import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Home03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M9.555 2.126a4 4 0 0 1 4.89 0l9.166 7.083-1.222 1.582-.389-.3V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.51l-.389.3L.39 9.21zm3.672 1.596a2 2 0 0 0-2.454 0L4 8.989V18a2 2 0 0 0 2 2h2v-4a4 4 0 0 1 8 0v4h2a2 2 0 0 0 2-2V8.99zM12 14a2 2 0 0 0-2 2v4h4v-4a2 2 0 0 0-2-2" clipRule="evenodd"/></svg>
    );
  },
);

Home03.displayName = 'Home03';
