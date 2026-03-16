import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wine = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.563 1a1 1 0 0 1 1 1v5.629l1.504 1.752A8 8 0 0 1 23 14.595V20a3 3 0 0 1-3 3H2v-2h4v-1.426l-2.018-1.173A6 6 0 0 1 1 13.215V11a1 1 0 0 1 1-1h9.452q.225-.32.48-.62l1.505-1.751V2a1 1 0 0 1 1-1zM8 19.574V21h2.174A3 3 0 0 1 10 20v-1.589zm-5-6.36c0 1.425.757 2.743 1.988 3.459L7 17.843l2.012-1.17a4 4 0 0 0 .988-.816v-1.262q0-.172.007-.345.005-.096.013-.19.014-.24.045-.479.014-.108.032-.216.009-.064.02-.127.02-.123.047-.246l.016-.078a8 8 0 0 1 .233-.854l.02-.06H3z"/></svg>
    );
  },
);

Wine.displayName = 'Wine';
