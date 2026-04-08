import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const YouTubeBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M21.245 5.837c.32.323.55.723.667 1.162.432 1.621.432 5 .432 5s0 3.38-.432 5.001a2.6 2.6 0 0 1-1.825 1.837c-1.613.434-8.063.434-8.063.434s-6.45 0-8.064-.434A2.6 2.6 0 0 1 2.135 17c-.431-1.62-.431-5-.431-5s0-3.38.431-5A2.6 2.6 0 0 1 3.96 5.162c1.614-.434 8.064-.434 8.064-.434s6.45 0 8.063.434c.439.12.838.352 1.158.674M15.307 12 9.914 8.93v6.139z" clipRule="evenodd"/></svg>
    );
  },
);

YouTubeBlack.displayName = 'YouTubeBlack';
