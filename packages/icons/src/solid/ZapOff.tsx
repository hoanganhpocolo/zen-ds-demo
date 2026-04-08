import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZapOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m20.492 20.842-1.415 1.414-4.07-4.069-4.297 4.476c-.98 1.02-2.683.108-2.377-1.273L9.753 15H4.388c-1.206 0-1.848-1.424-1.05-2.328l2.89-3.265-4.829-4.828 1.415-1.414zM13.36 1.354c.964-.921 2.602-.061 2.33 1.297l-1.47 7.353 5.35.019c1.231.005 1.858 1.482 1.005 2.37l-2.797 2.91-8.896-8.896 4.388-4.958z"/></svg>
    );
  },
);

ZapOff.displayName = 'ZapOff';
