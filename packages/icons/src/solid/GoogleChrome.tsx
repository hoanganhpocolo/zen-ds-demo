import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GoogleChrome = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22.582 9c.27.954.418 1.96.418 3 0 6.075-4.925 11-11 11q-.296 0-.587-.017l4.7-8.141c.432-.624.725-1.35.836-2.136l.008-.061a5 5 0 0 0 .032-.344Q17 12.15 17 12l-.001-.017a5 5 0 0 0-.006-.226q-.002-.044-.006-.087l-.008-.121A5.05 5.05 0 0 0 16 9zM7.393 13.951c.294.7.74 1.317 1.298 1.81a4.78 4.78 0 0 0 2.689 1.199q.305.039.62.04.294 0 .578-.034L9.29 22.662C4.525 21.455 1 17.14 1 12c0-2.221.66-4.287 1.792-6.017z"/><path fill="currentColor" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6"/><path fill="currentColor" d="M12 1c4.274 0 7.976 2.44 9.797 6H12l-.258.007-.103.007a5 5 0 0 0-.524.065l-.095.017q-.2.04-.395.096l-.059.017a5 5 0 0 0-.82.328l-.024.012q-.088.044-.173.093l-.031.018a5.02 5.02 0 0 0-2.1 2.336L4.136 4.311A10.97 10.97 0 0 1 12 1"/></svg>
    );
  },
);

GoogleChrome.displayName = 'GoogleChrome';
