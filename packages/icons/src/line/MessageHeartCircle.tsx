import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MessageHeartCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 8.7a2.9 2.9 0 0 1 4.005.22c.698.736 1.009 1.606.995 2.497-.013.864-.329 1.69-.773 2.403-.876 1.41-2.398 2.613-3.905 3.126a1 1 0 0 1-.644 0c-1.508-.513-3.029-1.716-3.906-3.126-.443-.713-.759-1.539-.772-2.403-.014-.891.297-1.761.995-2.497A2.9 2.9 0 0 1 12 8.7m2.554 1.597a.9.9 0 0 0-1.337 0L12 11.579l-1.217-1.282a.9.9 0 0 0-1.337 0c-.333.352-.452.714-.446 1.089.006.401.158.875.47 1.378.573.92 1.563 1.743 2.53 2.163.967-.42 1.957-1.243 2.53-2.163.312-.503.464-.977.47-1.378.006-.374-.113-.737-.446-1.09"/><path fill="currentColor" d="M21 12c0-4.647-3.98-8.5-9-8.5S3 7.353 3 12c0 1.632.486 3.156 1.333 4.453a1 1 0 0 1 .142.75l-.67 3.227 3.474-.898.085-.018a1 1 0 0 1 .595.083A9.4 9.4 0 0 0 12 20.5c5.02 0 9-3.853 9-8.5m2 0c0 5.847-4.974 10.5-11 10.5-1.625 0-3.171-.338-4.563-.944l-3.909 1.011a1.5 1.5 0 0 1-1.844-1.756l.75-3.623A10.1 10.1 0 0 1 1 12C1 6.153 5.974 1.5 12 1.5S23 6.153 23 12"/></svg>
    );
  },
);

MessageHeartCircle.displayName = 'MessageHeartCircle';
