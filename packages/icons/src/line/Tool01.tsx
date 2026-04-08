import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tool01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.421 1.013q.628.038 1.223.182a1.77 1.77 0 0 1 1.33 1.36 1.95 1.95 0 0 1-.503 1.743h-.001L16.396 6.48l1.585 1.586 1.787-1.88.093-.093a1.93 1.93 0 0 1 1.745-.474c.63.149 1.167.636 1.315 1.356l.024.147.041.436q.015.219.014.441a7 7 0 0 1-6.64 6.991L16 15c-.777 0-1.525-.13-2.224-.364L5.914 22.5a2 2 0 0 1-2.676.138l-.152-.138L1.5 20.914a2 2 0 0 1 0-2.828l7.862-7.864A7 7 0 0 1 16 1zM16.001 3a5 5 0 0 0-4.558 7.056 1 1 0 0 1-.205 1.119L2.914 19.5 4.5 21.086l8.324-8.325.117-.1a1 1 0 0 1 1.002-.104A5 5 0 0 0 16 13l.257-.007A5 5 0 0 0 21 8q-.001-.102-.007-.201l-1.562 1.645a2 2 0 0 1-2.864.037l-1.585-1.585a2 2 0 0 1-.036-2.792l1.926-2.028a5 5 0 0 0-.57-.067z"/></svg>
    );
  },
);

Tool01.displayName = 'Tool01';
