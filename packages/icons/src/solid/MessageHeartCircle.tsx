import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MessageHeartCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1.5c6.026 0 11 4.653 11 10.5s-4.974 10.5-11 10.5c-1.625 0-3.171-.338-4.563-.944l-3.909 1.011a1.5 1.5 0 0 1-1.844-1.756l.75-3.623A10.1 10.1 0 0 1 1 12C1 6.153 5.974 1.5 12 1.5m3.204 7.61c-.871-.893-2.266-.493-3.204.285-.938-.779-2.333-1.178-3.204-.286-.559.573-.807 1.25-.796 1.943.01.672.263 1.314.618 1.869.702 1.097 1.918 2.033 3.124 2.432a.82.82 0 0 0 .516 0c1.206-.4 2.422-1.335 3.124-2.432.355-.555.607-1.197.618-1.87.01-.692-.238-1.37-.796-1.942"/></svg>
    );
  },
);

MessageHeartCircle.displayName = 'MessageHeartCircle';
