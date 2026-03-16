import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MessageCheckCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1.5c6.026 0 11 4.653 11 10.5s-4.974 10.5-11 10.5c-1.625 0-3.171-.338-4.563-.944l-3.909 1.011a1.5 1.5 0 0 1-1.844-1.756l.75-3.623A10.1 10.1 0 0 1 1 12C1 6.153 5.974 1.5 12 1.5m-.5 11.293L9.207 10.5l-1.414 1.414 3 3a1 1 0 0 0 1.414 0l4.5-4.5L15.293 9z"/></svg>
    );
  },
);

MessageCheckCircle.displayName = 'MessageCheckCircle';
