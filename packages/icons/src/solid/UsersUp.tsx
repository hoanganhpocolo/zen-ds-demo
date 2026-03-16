import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UsersUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 22H2a1 1 0 0 1-1-1 8 8 0 0 1 8-8h5zm6.293-7.207a1 1 0 0 1 1.414 0L23 18.086 21.586 19.5 20 17.914V22h-2v-4.086L16.414 19.5 15 18.086zM9 2a4.75 4.75 0 1 1 0 9.5A4.75 4.75 0 0 1 9 2m6 0a4.75 4.75 0 1 1-1.286 9.321A6.72 6.72 0 0 0 15.5 6.75c0-1.764-.678-3.37-1.786-4.572A4.8 4.8 0 0 1 15 2"/></svg>
    );
  },
);

UsersUp.displayName = 'UsersUp';
