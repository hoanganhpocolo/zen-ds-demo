import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CheckDone = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m18.704 12.914-4.2 4.2a1 1 0 0 1-1.414 0l-2.8-2.8 1.414-1.414 2.093 2.093L17.29 11.5z"/><path fill="currentColor" fillRule="evenodd" d="M14 1a4 4 0 0 1 4 4v1h1a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-1H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm-4 7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v-6a4 4 0 0 1 4-4h6V5a2 2 0 0 0-2-2z" clipRule="evenodd"/></svg>
    );
  },
);

CheckDone.displayName = 'CheckDone';
