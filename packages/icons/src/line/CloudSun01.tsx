import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudSun01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.333 3a5.5 5.5 0 0 1 4.549 8.592c1.29 1.06 2.118 2.643 2.118 4.431 0 2.946-2.272 5.612-5.256 5.97l-.06.007H6.316l-.06-.007C3.273 21.635 1 18.97 1 16.023c0-2.982 2.3-5.392 5.216-5.762.655-2.3 2.722-4.002 5.203-4.234A5.5 5.5 0 0 1 16.333 3M12 8c-2.07 0-3.73 1.487-3.97 3.34l-.113.875L7 12.21h-.002C4.754 12.21 3 13.954 3 16.023 3 17.968 4.516 19.74 6.438 20h11.124C19.484 19.739 21 17.968 21 16.023c0-2.069-1.753-3.811-3.998-3.812H17l-.917.004-.113-.875C15.73 9.487 14.07 8 12 8m4.333-3a3.5 3.5 0 0 0-2.664 1.229c1.983.555 3.559 2.078 4.115 4.032q.707.09 1.355.33A3.5 3.5 0 0 0 16.333 5"/></svg>
    );
  },
);

CloudSun01.displayName = 'CloudSun01';
