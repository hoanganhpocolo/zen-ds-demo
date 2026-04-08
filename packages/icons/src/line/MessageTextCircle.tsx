import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MessageTextCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 15h9v-2H8zm0-4h6V9H8z"/><path fill="currentColor" d="M21 12c0-4.647-3.98-8.5-9-8.5S3 7.353 3 12c0 1.632.486 3.156 1.333 4.453a1 1 0 0 1 .142.75l-.67 3.227 3.474-.898.085-.018a1 1 0 0 1 .595.083A9.4 9.4 0 0 0 12 20.5c5.02 0 9-3.853 9-8.5m2 0c0 5.847-4.974 10.5-11 10.5-1.625 0-3.171-.338-4.563-.944l-3.909 1.011a1.5 1.5 0 0 1-1.844-1.756l.75-3.623A10.1 10.1 0 0 1 1 12C1 6.153 5.974 1.5 12 1.5S23 6.153 23 12"/></svg>
    );
  },
);

MessageTextCircle.displayName = 'MessageTextCircle';
