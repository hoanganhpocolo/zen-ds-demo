import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MessageNotificationCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12 1.5c1.618 0 3.16.338 4.55.942a4.5 4.5 0 0 1 5.888 6.234C22.8 9.72 23 10.837 23 12c0 5.847-4.974 10.5-11 10.5-1.625 0-3.171-.338-4.563-.944l-3.909 1.011a1.5 1.5 0 0 1-1.844-1.756l.75-3.623A10.1 10.1 0 0 1 1 12C1 6.153 5.974 1.5 12 1.5M18.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd"/></svg>
    );
  },
);

MessageNotificationCircle.displayName = 'MessageNotificationCircle';
