import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Building02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.5 9h-7V7h7z"/><path fill="currentColor" fillRule="evenodd" d="M17 1a4 4 0 0 1 4 4v16h2v2H1v-2h2V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v16h3v-5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v5h3V5a2 2 0 0 0-2-2zm4 12a1 1 0 0 0-1 1v5h4v-5a1 1 0 0 0-1-1z" clipRule="evenodd"/></svg>
    );
  },
);

Building02.displayName = 'Building02';
