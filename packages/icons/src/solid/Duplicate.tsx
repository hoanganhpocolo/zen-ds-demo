import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Duplicate = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M14 1a4 4 0 0 1 4 4v1h1a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-1H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm-.5 12.5H11v2h2.5V18h2v-2.5H18v-2h-2.5V11h-2zM5 3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v-6a4 4 0 0 1 4-4h6V5a2 2 0 0 0-2-2z" clipRule="evenodd"/></svg>
    );
  },
);

Duplicate.displayName = 'Duplicate';
