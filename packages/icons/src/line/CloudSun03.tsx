import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudSun03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.916 1c3.619 0 6.59 2.78 6.892 6.32a5.8 5.8 0 0 1 1.976 2.94C20.7 10.632 23 13.04 23 16.024c0 2.946-2.272 5.612-5.256 5.97l-.06.007H6.316l-.06-.007C3.273 21.635 1 18.97 1 16.023c0-1.77.81-3.338 2.078-4.398A6.916 6.916 0 0 1 8.916 1M12 8c-2.07 0-3.73 1.487-3.97 3.34l-.113.875L7 12.21h-.002C4.754 12.21 3 13.954 3 16.023 3 17.968 4.516 19.74 6.438 20h11.124C19.484 19.739 21 17.968 21 16.023c0-2.069-1.753-3.811-3.998-3.812H17l-.917.004-.113-.875C15.73 9.487 14.07 8 12 8M8.916 3a4.916 4.916 0 0 0-4.111 7.613c.447-.17.92-.29 1.41-.352C6.922 7.783 9.266 6 12 6c.524 0 1.034.065 1.52.188A4.92 4.92 0 0 0 8.917 3"/></svg>
    );
  },
);

CloudSun03.displayName = 'CloudSun03';
