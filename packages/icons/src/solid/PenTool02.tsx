import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PenTool02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.07 2.026c.39-.39 1.025-.39 1.415 0l5.656 5.657a1 1 0 0 1 0 1.414l-1.78 1.78a11 11 0 0 1-3.169 8.826l-1.148 1.149a2 2 0 0 1-1.283.58l-10.23.683c-.252.017-.5-.062-.694-.218l-.08-.073 6.865-6.865a2.5 2.5 0 1 0-1.414-1.414L2.343 20.41a1 1 0 0 1-.291-.774l.682-10.23c.032-.484.239-.94.581-1.283l1.149-1.147a11 11 0 0 1 8.827-3.171z"/></svg>
    );
  },
);

PenTool02.displayName = 'PenTool02';
