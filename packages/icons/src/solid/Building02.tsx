import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Building02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M17 1a4 4 0 0 1 4 4v16h2v2H1v-2h2V5a4 4 0 0 1 4-4zm-6 13a2 2 0 0 0-2 2v5h6v-5a2 2 0 0 0-2-2zM8.5 9h7V7h-7z" clipRule="evenodd"/></svg>
    );
  },
);

Building02.displayName = 'Building02';
