import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Motocycle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><circle cx="5.5" cy="15.5" r="4.5" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5.5 15.5 1.608-6M17.5 8H16l2.5 7.5m-1-7.5H22v-.5A4.5 4.5 0 0 0 17.5 3z"/><circle cx="18.5" cy="15.5" r="4.5" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M10 14h4"/><rect width="4" height="8" x="15" y="6" stroke="currentColor" strokeWidth="2" rx="2" transform="rotate(90 15 6)"/><path stroke="currentColor" strokeWidth="2" d="M7 8H4a3 3 0 0 1-3-3"/></svg>
    );
  },
);

Motocycle.displayName = 'Motocycle';
