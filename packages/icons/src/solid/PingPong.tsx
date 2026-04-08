import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PingPong = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.742 2.6C12.43.159 17.443.558 20.692 3.808a9.5 9.5 0 0 1 0 13.435c-3.098 3.098-7.802 3.606-11.43 1.53l-3.066 3.066a2 2 0 0 1-2.828 0l-.707-.707a2 2 0 0 1 0-2.828l3.066-3.067a9.5 9.5 0 0 1-1.248-4.716A4.499 4.499 0 1 1 8.742 2.6M4.075 19.718l.707.707 2.83-2.83-.335-.333-.02-.019-.031-.033-.322-.321zM6.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"/></svg>
    );
  },
);

PingPong.displayName = 'PingPong';
