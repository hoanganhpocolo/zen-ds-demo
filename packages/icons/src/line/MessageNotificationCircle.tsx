import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MessageNotificationCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1.5c2.116 0 4.1.575 5.787 1.572a3.5 3.5 0 0 0-2 1.216A9.4 9.4 0 0 0 12 3.5c-5.02 0-9 3.853-9 8.5 0 1.632.486 3.156 1.333 4.453a1 1 0 0 1 .142.75l-.67 3.227 3.474-.898.085-.018a1 1 0 0 1 .595.083A9.4 9.4 0 0 0 12 20.5c5.02 0 9-3.853 9-8.5 0-.927-.162-1.822-.455-2.661a3.5 3.5 0 0 0 1.34-1.952A10.06 10.06 0 0 1 23 12c0 5.847-4.974 10.5-11 10.5-1.625 0-3.171-.338-4.563-.944l-3.909 1.011a1.5 1.5 0 0 1-1.844-1.756l.75-3.623A10.1 10.1 0 0 1 1 12C1 6.153 5.974 1.5 12 1.5"/><path fill="currentColor" d="M21 6.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"/></svg>
    );
  },
);

MessageNotificationCircle.displayName = 'MessageNotificationCircle';
