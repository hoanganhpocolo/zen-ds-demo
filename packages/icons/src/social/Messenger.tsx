import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Messenger = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="url(#a)" d="M12 1.68c-5.813 0-10.32 4.26-10.32 10.01 0 3.008 1.233 5.609 3.24 7.405.168.15.271.36.277.588l.056 1.837a.826.826 0 0 0 1.159.73l2.048-.903a.83.83 0 0 1 .552-.042c.942.258 1.943.398 2.988.398 5.813 0 10.32-4.26 10.32-10.01C22.32 5.942 17.813 1.68 12 1.68"/><path fill="#fff" d="M5.803 14.618 8.834 9.81a1.55 1.55 0 0 1 2.24-.412l2.412 1.808a.62.62 0 0 0 .746-.002l3.256-2.472c.433-.33 1 .19.712.653l-3.034 4.806a1.547 1.547 0 0 1-2.24.413l-2.412-1.809a.62.62 0 0 0-.746.003l-3.256 2.471c-.433.33-1-.188-.71-.65"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(22.704 0 0 22.7034 5.137 22.32)" gradientUnits="userSpaceOnUse"><stop stopColor="#09F"/><stop offset=".6" stopColor="#A033FF"/><stop offset=".9" stopColor="#FF5280"/><stop offset="1" stopColor="#FF7061"/></radialGradient></defs></svg>
    );
  },
);

Messenger.displayName = 'Messenger';
