import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Certificate = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 16H9v-2h6zM12 6.7a2.9 2.9 0 0 1 4.005.22c.698.736 1.009 1.606.995 2.497-.013.864-.329 1.69-.773 2.403-.876 1.41-2.398 2.613-3.905 3.126a1 1 0 0 1-.644 0c-1.508-.513-3.029-1.716-3.906-3.126-.443-.713-.759-1.539-.772-2.403-.014-.891.297-1.761.995-2.497A2.9 2.9 0 0 1 12 6.7m2.554 1.597a.9.9 0 0 0-1.337 0L12 9.579l-1.217-1.282a.9.9 0 0 0-1.337 0c-.333.352-.452.714-.446 1.089.006.401.158.875.47 1.378.573.92 1.563 1.743 2.53 2.163.967-.42 1.957-1.243 2.53-2.163.312-.503.464-.977.47-1.378.006-.375-.113-.737-.446-1.09"/></svg>
    );
  },
);

Certificate.displayName = 'Certificate';
