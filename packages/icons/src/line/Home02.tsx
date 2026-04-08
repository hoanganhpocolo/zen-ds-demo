import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Home02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M9.544 2.144a4 4 0 0 1 4.912 0l6 4.666A4 4 0 0 1 22 9.967V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9.967A4 4 0 0 1 3.544 6.81zm3.683 1.578a2 2 0 0 0-2.454 0l-6 4.667A2 2 0 0 0 4 9.967V18a2 2 0 0 0 2 2h2v-4a4 4 0 0 1 8 0v4h2a2 2 0 0 0 2-2V9.967a2 2 0 0 0-.773-1.578zM12 14a2 2 0 0 0-2 2v4h4v-4a2 2 0 0 0-2-2" clipRule="evenodd"/></svg>
    );
  },
);

Home02.displayName = 'Home02';
