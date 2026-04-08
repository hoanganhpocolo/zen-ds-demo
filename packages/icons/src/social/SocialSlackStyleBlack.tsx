import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SocialSlackStyleBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.175 3.92c0 1.186.958 2.145 2.145 2.145h2.145V3.92A2.143 2.143 0 0 0 9.32 1.775 2.143 2.143 0 0 0 7.175 3.92m4.29 5.38A2.143 2.143 0 0 0 9.32 7.153H3.94A2.143 2.143 0 0 0 1.795 9.3c0 1.187.959 2.146 2.145 2.146h5.38A2.143 2.143 0 0 0 11.465 9.3m-7.508 7.524a2.143 2.143 0 0 0 2.145-2.145v-2.145H3.957a2.143 2.143 0 0 0-2.146 2.145c0 1.186.96 2.145 2.146 2.145m5.363-4.29a2.143 2.143 0 0 0-2.145 2.145v5.363c0 1.186.958 2.145 2.145 2.145a2.143 2.143 0 0 0 2.145-2.145v-5.363a2.143 2.143 0 0 0-2.145-2.145M17.917 9.3c0-1.187.959-2.146 2.145-2.146 1.187 0 2.146.959 2.146 2.145a2.143 2.143 0 0 1-2.146 2.146h-2.145zm-1.072 0a2.143 2.143 0 0 1-2.146 2.145 2.143 2.143 0 0 1-2.145-2.146V3.92c0-1.185.959-2.144 2.145-2.144 1.187 0 2.146.959 2.146 2.145zm0 10.742a2.143 2.143 0 0 0-2.146-2.145h-2.145v2.145c0 1.186.959 2.145 2.145 2.145a2.143 2.143 0 0 0 2.146-2.145m-4.291-5.363c0 1.186.959 2.145 2.145 2.145h5.38a2.143 2.143 0 0 0 2.145-2.145 2.143 2.143 0 0 0-2.145-2.145h-5.38a2.143 2.143 0 0 0-2.145 2.145"/></svg>
    );
  },
);

SocialSlackStyleBlack.displayName = 'SocialSlackStyleBlack';
