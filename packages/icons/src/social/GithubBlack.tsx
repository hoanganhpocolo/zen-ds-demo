import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GithubBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12.009 1.652C6.297 1.652 1.68 6.303 1.68 12.057c0 4.6 2.958 8.493 7.062 9.871.514.104.701-.224.701-.499 0-.241-.016-1.068-.016-1.93-2.874.62-3.472-1.24-3.472-1.24-.462-1.206-1.146-1.516-1.146-1.516-.94-.637.069-.637.069-.637 1.043.069 1.59 1.068 1.59 1.068.923 1.585 2.411 1.137 3.01.861.085-.672.359-1.137.65-1.395-2.292-.241-4.703-1.137-4.703-5.134a4.07 4.07 0 0 1 1.06-2.79c-.102-.259-.462-1.327.103-2.757 0 0 .872-.276 2.838 1.068a10 10 0 0 1 2.583-.345c.872 0 1.76.121 2.582.345 1.966-1.344 2.838-1.068 2.838-1.068.565 1.43.205 2.498.103 2.756.667.724 1.06 1.654 1.06 2.791 0 3.997-2.41 4.875-4.72 5.134.377.327.701.947.701 1.93 0 1.395-.016 2.514-.016 2.859 0 .276.188.603.7.5a10.4 10.4 0 0 0 7.063-9.872c.017-5.754-4.617-10.405-10.311-10.405" clipRule="evenodd"/></svg>
    );
  },
);

GithubBlack.displayName = 'GithubBlack';
