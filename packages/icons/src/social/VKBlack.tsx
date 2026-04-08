import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VKBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M3.13 3.13c-1.45 1.452-1.45 3.787-1.45 8.457v.826c0 4.67 0 7.005 1.45 8.456 1.452 1.45 3.787 1.45 8.457 1.45h.826c4.67 0 7.005 0 8.456-1.45s1.451-3.786 1.451-8.456v-.826c0-4.67 0-7.005-1.45-8.456-1.452-1.451-3.787-1.451-8.457-1.451h-.826c-4.67 0-7.005 0-8.456 1.45m2.033 4.828c.112 5.366 2.795 8.591 7.5 8.591h.266v-3.07c1.729.172 3.036 1.436 3.56 3.07h2.443c-.671-2.442-2.434-3.792-3.535-4.308 1.1-.637 2.649-2.185 3.019-4.283h-2.22c-.48 1.703-1.908 3.25-3.267 3.397V7.958h-2.22v5.951c-1.376-.344-3.113-2.012-3.19-5.951z" clipRule="evenodd"/></svg>
    );
  },
);

VKBlack.displayName = 'VKBlack';
