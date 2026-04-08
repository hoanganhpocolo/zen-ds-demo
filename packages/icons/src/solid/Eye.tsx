import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Eye = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="m22.928 11.627-.004-.01-.033-.079-.008-.018a15 15 0 0 0-.587-1.177 16.4 16.4 0 0 0-1.915-2.748C18.648 5.595 15.895 3.5 12 3.5S5.352 5.595 3.62 7.595a16.4 16.4 0 0 0-2.384 3.66 10 10 0 0 0-.119.264l-.008.02-.024.056-.006.014-.007.02a1 1 0 0 0 0 .742l.004.012.009.022.024.056.008.02q.041.095.12.264a16.4 16.4 0 0 0 2.383 3.66c1.732 2 4.485 4.095 8.38 4.095s6.648-2.095 8.38-4.095a16.4 16.4 0 0 0 2.384-3.66q.078-.169.119-.264l.008-.02.024-.056.004-.01.01-.024a1 1 0 0 0-.001-.744M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd"/></svg>
    );
  },
);

Eye.displayName = 'Eye';
