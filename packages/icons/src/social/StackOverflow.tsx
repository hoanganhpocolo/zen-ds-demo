import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const StackOverflow = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#BCBBBB" d="M18.148 20.485v-5.53h1.835v7.365H3.418v-7.365h1.835v5.53z"/><path fill="#F48023" d="m7.28 14.431 9.009 1.883.381-1.811-9.009-1.883zm1.191-4.29 8.342 3.885.763-1.668-8.342-3.91zm2.312-4.1 7.079 5.887 1.168-1.406-7.079-5.887zM15.36 1.68l-1.477 1.096 5.481 7.389 1.478-1.097zM7.09 18.626h9.2V16.79h-9.2z"/></svg>
    );
  },
);

StackOverflow.displayName = 'StackOverflow';
