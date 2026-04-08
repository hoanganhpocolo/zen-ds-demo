import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Users = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.008 12.77c4.627 0 7.443 3.523 7.996 7.696.111.842-.579 1.534-1.417 1.534H2.43c-.839 0-1.53-.692-1.418-1.534.553-4.173 3.369-7.696 7.996-7.696m6.046 0c4.59.032 7.384 3.541 7.934 7.696.112.842-.58 1.534-1.418 1.534h-2.806a3.34 3.34 0 0 0 .246-1.807c-.38-2.87-1.722-5.63-3.956-7.423M9 2a4.75 4.75 0 1 1 0 9.5A4.75 4.75 0 0 1 9 2m6 0a4.75 4.75 0 1 1-1.286 9.321A6.72 6.72 0 0 0 15.5 6.75c0-1.764-.678-3.37-1.786-4.572C14.123 2.063 14.554 2 15 2"/></svg>
    );
  },
);

Users.displayName = 'Users';
