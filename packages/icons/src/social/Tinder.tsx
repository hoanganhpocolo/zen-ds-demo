import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tinder = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="url(#a)" fillRule="evenodd" d="M9.054 10.337c3.279-1.132 3.837-4.08 3.418-6.791 0-.098.084-.168.168-.14 3.14 1.537 6.67 4.89 6.67 9.92 0 3.857-2.986 7.267-7.326 7.267a6.97 6.97 0 0 1-4.343-1.273 6.986 6.986 0 0 1-2.491-8.201 7 7 0 0 1 2.899-3.48c.084-.055.195 0 .195.099.042.517.182 1.816.754 2.599z" clipRule="evenodd"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(14.62 0 0 17.2 12 20.6)" gradientUnits="userSpaceOnUse"><stop stopColor="#FF7854"/><stop offset="1" stopColor="#FD267D"/></radialGradient></defs></svg>
    );
  },
);

Tinder.displayName = 'Tinder';
