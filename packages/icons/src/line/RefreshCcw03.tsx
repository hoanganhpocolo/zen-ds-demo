import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RefreshCcw03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.22 4.198A8 8 0 0 0 4 12c0 1.864.845 3.492 2.14 5.023.848 1.003 1.845 1.915 2.86 2.797V16h2v6a1 1 0 0 1-1 1H4v-2h3.31c-.932-.824-1.88-1.719-2.698-2.686C3.156 16.59 2 14.52 2 12c0-4.76 3.325-8.741 7.778-9.752zM20 3h-3.31c.931.824 1.878 1.718 2.697 2.686C20.843 7.408 22 9.48 22 12c0 4.76-3.326 8.741-7.78 9.752l-.442-1.95A8.004 8.004 0 0 0 20 12c0-1.864-.845-3.492-2.14-5.022-.848-1.004-1.845-1.916-2.86-2.798V8h-2V2a1 1 0 0 1 1-1h6z"/></svg>
    );
  },
);

RefreshCcw03.displayName = 'RefreshCcw03';
