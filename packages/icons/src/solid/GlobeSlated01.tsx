import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GlobeSlated01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.092 2C20.487 4.093 22 7.158 22 10.571 22 16.883 16.832 22 10.456 22a11.57 11.57 0 0 1-8.163-3.348.98.98 0 0 1 0-1.4l2.323-2.3a7.18 7.18 0 0 1-1.487-4.38c0-4.007 3.28-7.254 7.327-7.254 4.046 0 7.326 3.248 7.326 7.253 0 4.006-3.28 7.253-7.326 7.253a7.35 7.35 0 0 1-4.426-1.472l-1.579 1.564a9.56 9.56 0 0 0 6.005 2.104c5.271 0 9.544-4.23 9.544-9.449a9.38 9.38 0 0 0-3.231-7.087z"/></svg>
    );
  },
);

GlobeSlated01.displayName = 'GlobeSlated01';
