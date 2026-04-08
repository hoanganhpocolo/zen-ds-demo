import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Building03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 9H7V7h6z"/><path fill="currentColor" fillRule="evenodd" d="M14 2a4 4 0 0 1 4 4v3h2a2 2 0 0 1 2 2v9h1v2H1v-2h1V6a4 4 0 0 1 4-4zM6 4a2 2 0 0 0-2 2v14h2.5v-5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v5H16V6a2 2 0 0 0-2-2zm3.5 10a1 1 0 0 0-1 1v5h3v-5a1 1 0 0 0-1-1zm8.5 6h2v-9h-2z" clipRule="evenodd"/></svg>
    );
  },
);

Building03.displayName = 'Building03';
