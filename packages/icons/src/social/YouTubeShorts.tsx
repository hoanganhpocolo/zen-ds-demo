import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const YouTubeShorts = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#F40407" fillRule="evenodd" d="M14.357 2.135c1.947-1.014 4.357-.275 5.382 1.651a3.92 3.92 0 0 1-1.67 5.325l-1.6.841a3.99 3.99 0 0 1 3.382 2.103 3.92 3.92 0 0 1-1.67 5.325l-8.536 4.485c-1.946 1.014-4.357.275-5.381-1.651a3.92 3.92 0 0 1 1.67-5.325l1.6-.841a3.99 3.99 0 0 1-3.383-2.104 3.92 3.92 0 0 1 1.67-5.324zM9.75 8.824l5.166 3.19-5.166 3.174z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="m9.75 8.824 5.166 3.19-5.166 3.174z" clipRule="evenodd"/></svg>
    );
  },
);

YouTubeShorts.displayName = 'YouTubeShorts';
