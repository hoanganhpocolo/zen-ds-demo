import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const QrCode = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.154 13.004A3 3 0 0 1 11 16v3a3 3 0 0 1-3 3H5a3 3 0 0 1-2.996-2.846L2 19v-3a3 3 0 0 1 3-3h3zM15 20h3.5v2H13v-5.5h2zm7 2h-2v-2h2zM5 15a1 1 0 0 0-1 1v3l.005.102A1 1 0 0 0 5 20h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-.897-.995L8 15zm2.5 3.5h-2v-2h2zm11 0h-2v-2h2zm3.5 0h-2v-2h2zm0-3.5h-7v-2h7zm-9-2h-2v-2h2zM8.154 2.004A3 3 0 0 1 11 5v3a3 3 0 0 1-3 3H5a3 3 0 0 1-2.996-2.846L2 8V5a3 3 0 0 1 3-3h3zm11 0A3 3 0 0 1 22 5v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-2.996-2.846L13 8V5a3 3 0 0 1 3-3h3zM5 4a1 1 0 0 0-1 1v3l.005.103A1 1 0 0 0 5 9h3a1 1 0 0 0 1-1V5a1 1 0 0 0-.897-.995L8 4zm11 0a1 1 0 0 0-1 1v3l.005.103A1 1 0 0 0 16 9h3a1 1 0 0 0 1-1V5a1 1 0 0 0-.898-.995L19 4zM7.5 7.5h-2v-2h2zm11 0h-2v-2h2z"/></svg>
    );
  },
);

QrCode.displayName = 'QrCode';
