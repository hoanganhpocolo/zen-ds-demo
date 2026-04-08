import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tool01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.151 1.006a1.7 1.7 0 0 1 1.502 1.175c.21.635.056 1.365-.444 1.892l-1.142 1.202a1 1 0 0 0 .018 1.397l1.17 1.17a1 1 0 0 0 1.433-.018l1.132-1.192.098-.097a1.92 1.92 0 0 1 1.8-.455 1.72 1.72 0 0 1 1.262 1.47l.013.154L23 8a7 7 0 0 1-6.64 6.991L16 15c-.777 0-1.525-.13-2.224-.364L5.914 22.5a2 2 0 0 1-2.676.138l-.152-.138L1.5 20.914a2 2 0 0 1 0-2.828l7.862-7.864A7 7 0 0 1 16 1z"/></svg>
    );
  },
);

Tool01.displayName = 'Tool01';
