import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Facebook = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#0866FF" d="M22.32 12C22.32 6.3 17.7 1.68 12 1.68S1.68 6.3 1.68 12c0 4.84 3.332 8.9 7.827 10.016v-6.862H7.379V12h2.128v-1.359c0-3.513 1.59-5.14 5.038-5.14.654 0 1.782.128 2.244.256v2.859a13 13 0 0 0-1.193-.039c-1.692 0-2.346.641-2.346 2.308V12h3.371l-.579 3.154H13.25v7.09c5.11-.617 9.07-4.968 9.07-10.244"/><path fill="#fff" d="m16.042 15.154.58-3.154H13.25v-1.115c0-1.667.654-2.308 2.346-2.308.526 0 .949.013 1.193.039v-2.86c-.462-.127-1.59-.256-2.244-.256-3.448 0-5.038 1.629-5.038 5.141v1.36H7.379v3.153h2.128v6.862a10.4 10.4 0 0 0 3.743.229v-7.091z"/></svg>
    );
  },
);

Facebook.displayName = 'Facebook';
