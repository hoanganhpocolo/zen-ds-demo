import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CheckDone = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M14 1a4 4 0 0 1 4 4v1h1a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-1H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm-.203 13.993L11.704 12.9l-1.414 1.415 2.8 2.8a1 1 0 0 0 1.414 0l4.2-4.2L17.29 11.5zM5 3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v-6a4 4 0 0 1 4-4h6V5a2 2 0 0 0-2-2z" clipRule="evenodd"/></svg>
    );
  },
);

CheckDone.displayName = 'CheckDone';
