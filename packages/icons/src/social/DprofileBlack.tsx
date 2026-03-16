import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const DprofileBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M20.558 1.68H3.445A1.765 1.765 0 0 0 1.68 3.445v17.11a1.765 1.765 0 0 0 1.765 1.765h17.113a1.765 1.765 0 0 0 1.762-1.765V3.445a1.765 1.765 0 0 0-1.762-1.765m.393 13.275a5.993 5.993 0 0 1-5.994 5.988h-5.9a5.99 5.99 0 0 1-5.991-5.989V9.042a5.99 5.99 0 0 1 5.99-5.99h5.914a5.995 5.995 0 0 1 5.993 5.99l-.014 5.912z" clipRule="evenodd"/></svg>
    );
  },
);

DprofileBlack.displayName = 'DprofileBlack';
