import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Film01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 3.995 3.794L22 6v12a4 4 0 0 1-3.794 3.995L18 22H6l-.206-.005A4 4 0 0 1 2 18V6a4 4 0 0 1 4-4zM4 18a2 2 0 0 0 1.796 1.99L6 20v-3H4zm14 2a2 2 0 0 0 2-2v-1h-2zM8 20h8v-7H8zm10-5h2v-2h-2zM4 15h2v-2H4zm0-4h2V9H4zm14 0h2V9h-2zM8 11h8V4H8zm10-4h2V6l-.01-.204A2 2 0 0 0 18 4zM5.796 4.01A2 2 0 0 0 4 6v1h2V4z"/></svg>
    );
  },
);

Film01.displayName = 'Film01';
