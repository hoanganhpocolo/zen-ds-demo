import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const HeartHand = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20.899 10.03a1.273 1.273 0 0 1 2.327.977l-1.721 6.308A5 5 0 0 1 16.681 21H8.35a1 1 0 0 0-.625.219l-1.49 1.192a1 1 0 0 1-1.368-.112l-3.233-3.594a1 1 0 0 1 .036-1.376l5.157-5.157A4 4 0 0 1 9.656 11H15.5a1.5 1.5 0 0 1 0 3h-3a.5.5 0 0 0 0 1h4.926a1 1 0 0 0 .863-.496z"/><path fill="currentColor" fillRule="evenodd" d="M13.5 1.57a2.683 2.683 0 0 1 3.588.253c.636.657.925 1.442.912 2.25-.012.778-.302 1.513-.7 2.14-.785 1.236-2.14 2.285-3.484 2.733a1 1 0 0 1-.632 0C11.84 8.498 10.486 7.45 9.7 6.213c-.397-.627-.688-1.362-.7-2.14-.012-.808.276-1.593.912-2.25A2.683 2.683 0 0 1 13.5 1.57m2.152 1.645a.69.69 0 0 0-1.003 0L13.5 4.4l-1.148-1.185a.69.69 0 0 0-1.003 0c-.267.275-.353.548-.349.826.005.306.125.683.389 1.1.476.75 1.3 1.429 2.111 1.785.811-.357 1.635-1.035 2.111-1.786.264-.416.384-.793.39-1.1.003-.277-.083-.55-.35-.825" clipRule="evenodd"/></svg>
    );
  },
);

HeartHand.displayName = 'HeartHand';
