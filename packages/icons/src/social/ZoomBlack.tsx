import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZoomBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M22.062 15.24a20.4 20.4 0 0 0 0-6.48 8.26 8.26 0 0 0-6.821-6.822 20.4 20.4 0 0 0-6.482 0A8.26 8.26 0 0 0 1.94 8.76a20.4 20.4 0 0 0 0 6.482 8.26 8.26 0 0 0 6.82 6.82 20.4 20.4 0 0 0 6.482 0 8.26 8.26 0 0 0 6.82-6.82m-8.956.446c.61 0 1.105-.495 1.105-1.106v-4.054c0-1.222-.99-2.212-2.211-2.212H7.209c-.611 0-1.106.495-1.106 1.106v4.054c0 1.222.99 2.212 2.211 2.212zm2.285-5.492 1.622-1.216a.553.553 0 0 1 .884.442v5.16c0 .456-.52.716-.884.442l-1.622-1.216a1.1 1.1 0 0 1-.442-.885V11.08c0-.349.164-.676.442-.885" clipRule="evenodd"/></svg>
    );
  },
);

ZoomBlack.displayName = 'ZoomBlack';
