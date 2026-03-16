import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Strikethrough = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3H9.82A2.82 2.82 0 0 0 7 7.82c0 .344.195.66.503.814L12.236 11H22v2h-5.764l1.156.578A2.91 2.91 0 0 1 19 16.181 4.82 4.82 0 0 1 14.18 21H10a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3h4.18A2.82 2.82 0 0 0 17 16.18a.91.91 0 0 0-.503-.814L11.764 13H2v-2h5.764l-1.156-.578A2.91 2.91 0 0 1 5 7.819 4.82 4.82 0 0 1 9.82 3z"/></svg>
    );
  },
);

Strikethrough.displayName = 'Strikethrough';
