import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Archive = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M21 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM5 18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8h-3v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2H5zm5-6h4v-2h-4zM3 8h18V4H3z" clipRule="evenodd"/></svg>
    );
  },
);

Archive.displayName = 'Archive';
