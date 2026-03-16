import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Telegram = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="url(#a)" d="M12 22.32c5.7 0 10.32-4.62 10.32-10.32S17.7 1.68 12 1.68 1.68 6.3 1.68 12 6.3 22.32 12 22.32"/><path fill="#fff" fillRule="evenodd" d="M6.351 11.891A492 492 0 0 1 12.37 9.3c2.866-1.192 3.461-1.4 3.85-1.406.085-.002.276.02.4.12a.43.43 0 0 1 .146.28c.014.08.031.263.018.406-.156 1.632-.828 5.592-1.17 7.42-.144.773-.43 1.032-.705 1.057-.6.055-1.054-.396-1.635-.776-.908-.596-1.421-.966-2.303-1.547-1.019-.672-.358-1.04.222-1.644.152-.158 2.793-2.56 2.844-2.777.006-.028.012-.13-.048-.183-.06-.054-.15-.035-.214-.02q-.136.03-4.353 2.877-.618.423-1.119.413c-.368-.008-1.077-.208-1.604-.38-.646-.21-1.16-.32-1.115-.678q.035-.278.767-.57" clipRule="evenodd"/><defs><linearGradient id="a" x1="1033.68" x2="1033.68" y1="1.68" y2="2050.37" gradientUnits="userSpaceOnUse"><stop stopColor="#2AABEE"/><stop offset="1" stopColor="#229ED9"/></linearGradient></defs></svg>
    );
  },
);

Telegram.displayName = 'Telegram';
