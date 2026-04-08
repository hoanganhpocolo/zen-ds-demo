import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Forward = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.048 2c2.736 0 5.22 1.09 7.031 2.856l.01.01L21 6.835V3.9h2V9a1 1 0 0 1-1 1h-5V8h2.5l-1.827-1.72A8.04 8.04 0 0 0 12.048 4C7.598 4 4 7.587 4 12s3.598 8 8.048 8a8.04 8.04 0 0 0 5.635-2.29 8 8 0 0 0 1.744-2.512l1.83.804A10.04 10.04 0 0 1 12.048 22C6.505 22 2 17.528 2 12S6.504 2 12.048 2m-1.911 13H9v-4.796h-.031l-1.232.861V9.94L9.068 9h1.069zm3.2-6q.746 0 1.283.35.54.351.83 1.02.29.664.287 1.611 0 .954-.29 1.63-.287.675-.824 1.033-.537.356-1.286.356-.749-.003-1.288-.36-.537-.355-.827-1.032-.288-.675-.285-1.627 0-.947.288-1.615.29-.667.827-1.015Q12.592 9 13.337 9m0 1.004q-.508 0-.813.495t-.307 1.482q0 .668.136 1.115.14.444.392.668.252.22.592.22.51 0 .815-.5.305-.501.302-1.503 0-.659-.139-1.097-.135-.439-.39-.66a.86.86 0 0 0-.588-.22"/></svg>
    );
  },
);

Forward.displayName = 'Forward';
