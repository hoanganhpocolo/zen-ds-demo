import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Copy = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M14 1a4 4 0 0 1 4 4v1h1a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-1H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM5 3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v-6a4 4 0 0 1 4-4h6V5a2 2 0 0 0-2-2z" clipRule="evenodd"/></svg>
    );
  },
);

Copy.displayName = 'Copy';
