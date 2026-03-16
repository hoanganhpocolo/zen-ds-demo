import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const DownloadCloud02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m13 19.586 2-2L16.414 19l-3.707 3.707a1 1 0 0 1-1.414 0L7.586 19 9 17.586l2 2V13h2z"/><path fill="currentColor" d="M9 1a8 8 0 0 1 6.93 4.009H17c3.316 0 6 2.693 6 6.01a6.01 6.01 0 0 1-5.334 5.975l-.22-1.988A4.01 4.01 0 0 0 21 11.02a4.005 4.005 0 0 0-4-4.011h-1.674a1 1 0 0 1-.903-.572A6 6 0 0 0 9 3C5.688 3 3 5.691 3 9.016c0 2.399 1.4 4.47 3.43 5.436l-.86 1.807A8.02 8.02 0 0 1 1 9.016C1 4.59 4.58 1 9 1"/></svg>
    );
  },
);

DownloadCloud02.displayName = 'DownloadCloud02';
