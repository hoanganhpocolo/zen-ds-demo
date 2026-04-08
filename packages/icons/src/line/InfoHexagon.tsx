import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const InfoHexagon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 17.5h-2V11h2zm-1-11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/><path fill="currentColor" fillRule="evenodd" d="M9.996 1.005a4 4 0 0 1 4.008 0l6.5 3.762A4 4 0 0 1 22.5 8.23v7.541a4 4 0 0 1-1.996 3.462l-6.5 3.763a4 4 0 0 1-4.008 0l-6.5-3.763A4 4 0 0 1 1.5 15.77V8.23a4 4 0 0 1 1.996-3.463zm3.006 1.73a2 2 0 0 0-2.004 0L4.498 6.5A2 2 0 0 0 3.5 8.23v7.541a2 2 0 0 0 .998 1.73l6.5 3.765a2 2 0 0 0 2.004 0l6.5-3.764a2 2 0 0 0 .998-1.73V8.228a2 2 0 0 0-.998-1.73z" clipRule="evenodd"/></svg>
    );
  },
);

InfoHexagon.displayName = 'InfoHexagon';
