import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZapOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m20.492 20.842-1.415 1.414-4.07-4.07-4.298 4.477c-.98 1.02-2.683.108-2.377-1.273L9.752 15H4.387c-1.206 0-1.847-1.424-1.05-2.328l2.89-3.266-4.828-4.828 1.415-1.414zm-9.743-1.108 2.844-2.962-1.788-1.788zm2.61-18.38c.963-.921 2.601-.062 2.33 1.297l-1.471 7.353 5.35.019c1.232.004 1.858 1.482 1.005 2.37l-2.797 2.91-1.415-1.415 1.798-1.87-3.68-.013-2.251-2.25L13.29 4.44l-2.994 3.384L8.88 6.407l4.388-4.958zM5.717 13H9.82l-2.178-2.178z"/></svg>
    );
  },
);

ZapOff.displayName = 'ZapOff';
