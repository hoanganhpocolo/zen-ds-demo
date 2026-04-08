import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hash02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M18.49 2.297 17.76 7H22v2h-4.54l-.899 6H22v2h-5.74l-.77 5-1.98-.297.73-4.703H8.26l-.77 5-1.98-.297L6.24 17H2v-2h4.54l.898-6H2V7h5.74l.77-5 1.98.297L9.76 7h5.98l.77-5zM8.561 15h5.977l.9-6H9.46z" clipRule="evenodd"/></svg>
    );
  },
);

Hash02.displayName = 'Hash02';
