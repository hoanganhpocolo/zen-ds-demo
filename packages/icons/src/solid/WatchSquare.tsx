import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const WatchSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15 1a1 1 0 0 1 .895.553l1.948 3.897A4 4 0 0 1 20 9v6a4 4 0 0 1-2.157 3.549l-1.948 3.898-.072.121A1 1 0 0 1 15 23H9a1 1 0 0 1-.895-.553L6.156 18.55A4 4 0 0 1 4 15V9a4 4 0 0 1 2.156-3.55l1.95-3.897.07-.121A1 1 0 0 1 9 1zM9.618 21h4.764l1-2H8.618zM11 12a1 1 0 0 0 .445.832l3 2 1.11-1.664L13 11.465V9h-2zM8.618 5h6.764l-1-2H9.618z"/></svg>
    );
  },
);

WatchSquare.displayName = 'WatchSquare';
