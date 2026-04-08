import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PenTool02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.07 1.921c.39-.39 1.025-.39 1.415 0l5.656 5.657a1 1 0 0 1 0 1.414l-1.78 1.78a11 11 0 0 1-3.169 8.827l-1.148 1.148a2 2 0 0 1-1.283.581l-10.23.683a1 1 0 0 1-.774-.291l-1.414-1.414a1 1 0 0 1-.291-.775l.682-10.23a2 2 0 0 1 .581-1.281l1.149-1.15a11 11 0 0 1 8.827-3.17zm-.707 3.535a1 1 0 0 1-.839.285l-.093-.012a9 9 0 0 0-7.553 2.556L4.73 9.434l-.606 9.09 4.706-4.706a2.998 2.998 0 0 1 4.826-3.411 3 3 0 0 1-3.412 4.826l-4.706 4.706 9.092-.606 1.148-1.148a9 9 0 0 0 2.546-7.637 1 1 0 0 1 .282-.849l1.414-1.414-4.242-4.243zm-2.121 6.364a1 1 0 1 0-1.414 1.415 1 1 0 0 0 1.414-1.415"/></svg>
    );
  },
);

PenTool02.displayName = 'PenTool02';
