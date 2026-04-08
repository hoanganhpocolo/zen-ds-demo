import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.394 14a6.996 6.996 0 0 0-2.72 9H4a2 2 0 0 1-2-2 7 7 0 0 1 7-7zm3.899.793a1 1 0 0 1 1.414 0L23 18.086 21.586 19.5 20 17.914V22h-2v-4.086L16.414 19.5 15 18.086zM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/></svg>
    );
  },
);

UserUp.displayName = 'UserUp';
