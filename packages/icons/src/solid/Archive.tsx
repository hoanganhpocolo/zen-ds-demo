import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Archive = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M21 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2v8.286C21 20.337 19.209 22 17 22H7c-2.209 0-4-1.663-4-3.714V10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM9 12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2H9zM3 8h18V4H3z" clipRule="evenodd"/></svg>
    );
  },
);

Archive.displayName = 'Archive';
