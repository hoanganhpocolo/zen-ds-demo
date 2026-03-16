import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Flash = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.953 1.395a1.04 1.04 0 0 1 1.207-.32 1 1 0 0 1 .626 1.058L12.915 8.5h8.06c.394 0 .753.22.924.567a.98.98 0 0 1-.124 1.058l-10.257 12.5c-.287.35-.78.471-1.203.295a1 1 0 0 1-.614-1.052l.871-6.368H3.025c-.39 0-.745-.216-.918-.556a.98.98 0 0 1 .102-1.049z"/></svg>
    );
  },
);

Flash.displayName = 'Flash';
