import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const StackOverflowBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m16.289 16.314-9.01-1.883.382-1.811 9.01 1.883zm.524-2.288L8.471 10.14l.763-1.692 8.342 3.909zm1.049-2.097-7.079-5.887 1.168-1.407 7.079 5.887zm-3.98-9.153 1.477-1.096 5.482 7.388-1.478 1.097zm2.407 15.85h-9.2V16.79h9.2z"/><path fill="currentColor" d="M18.148 14.955v5.53H5.253v-5.53H3.418v7.365h16.565v-7.365z"/></svg>
    );
  },
);

StackOverflowBlack.displayName = 'StackOverflowBlack';
