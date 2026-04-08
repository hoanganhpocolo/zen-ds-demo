import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Heart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12.495 3.886c2.32-2.515 6.118-2.515 8.438 0 3.004 3.255 2.383 7.336.369 10.668-2.008 3.32-5.53 6.185-8.971 7.39a1 1 0 0 1-.661 0c-3.44-1.205-6.963-4.07-8.97-7.39C.684 11.222.062 7.14 3.065 3.886c2.32-2.515 6.118-2.514 8.439 0l.495.536zm6.969 1.356c-1.529-1.656-3.97-1.656-5.5 0l-1.229 1.333a1 1 0 0 1-1.47 0l-1.23-1.333c-1.528-1.656-3.97-1.656-5.499 0-2.158 2.34-1.894 5.352-.126 8.277 1.71 2.828 4.702 5.303 7.59 6.416 2.887-1.113 5.88-3.588 7.59-6.416 1.768-2.926 2.032-5.938-.126-8.277" clipRule="evenodd"/></svg>
    );
  },
);

Heart.displayName = 'Heart';
