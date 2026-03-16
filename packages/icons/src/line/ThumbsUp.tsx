import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ThumbsUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.981 1.5c.96 0 1.863.46 2.427 1.235L17.508 7H20a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6.704a5 5 0 0 1-4.985-4.616l-.55-7.154A3 3 0 0 1 4.16 7H8.5V4.5a3 3 0 0 1 3-3zm-.481 2a1 1 0 0 0-1 1V8a1 1 0 0 1-1 1H4.16a1 1 0 0 0-.997 1.077l.55 7.153A3 3 0 0 0 6.704 20H16V8.325l-3.21-4.413a1 1 0 0 0-.809-.412zM18 9v11h2a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

ThumbsUp.displayName = 'ThumbsUp';
