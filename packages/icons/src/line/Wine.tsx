import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wine = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.563 1a1 1 0 0 1 1 1v5.629l1.504 1.752A8 8 0 0 1 23 14.595V20a3 3 0 0 1-3 3H2v-2h4v-1.426l-2.018-1.173A6 6 0 0 1 1 13.215V11a1 1 0 0 1 1-1h9.452q.225-.32.48-.62l1.505-1.751V2a1 1 0 0 1 1-1zM8 19.574V21h2.174A3 3 0 0 1 10 20v-1.589zM15.438 8a1 1 0 0 1-.242.651l-1.747 2.033a6 6 0 0 0-.594.822l-.003.008q-.305.511-.504 1.07l-.016.046A6 6 0 0 0 12 14.595V20a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-5.405a6 6 0 0 0-1.45-3.911L17.805 8.65a1 1 0 0 1-.242-.65V3h-2.125zM3 13.215a4 4 0 0 0 1.988 3.458L7 17.843l2.012-1.17a4 4 0 0 0 .988-.816v-1.262q0-.172.007-.345.005-.096.013-.19.014-.24.045-.479.014-.108.032-.216.009-.064.02-.127.02-.123.047-.246l.016-.078a8 8 0 0 1 .233-.854l.02-.06H3z"/></svg>
    );
  },
);

Wine.displayName = 'Wine';
