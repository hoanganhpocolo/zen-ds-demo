import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const QuoraBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.02 17.923c-.643-1.261-1.398-2.535-2.871-2.535-.282 0-.563.046-.821.164l-.5-.997c.61-.52 1.595-.934 2.861-.934 1.97 0 2.982.945 3.785 2.15.476-1.029.703-2.419.703-4.142 0-4.303-1.352-6.513-4.51-6.513-3.114 0-4.458 2.21-4.458 6.513 0 4.28 1.344 6.467 4.457 6.467a4.8 4.8 0 0 0 1.355-.174m.772 1.501a8.3 8.3 0 0 1-2.126.283c-4.145 0-8.203-3.292-8.203-8.078 0-4.832 4.058-8.124 8.203-8.124 4.214 0 8.234 3.268 8.234 8.124 0 2.7-1.267 4.896-3.107 6.314.594.887 1.207 1.476 2.059 1.476.93 0 1.306-.716 1.368-1.277h1.212c.07.748-.305 3.853-3.69 3.853-2.052 0-3.136-1.183-3.95-2.57"/></svg>
    );
  },
);

QuoraBlack.displayName = 'QuoraBlack';
