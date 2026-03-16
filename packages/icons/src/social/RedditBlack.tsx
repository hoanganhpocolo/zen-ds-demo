import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RedditBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.821 11.635c-.675 0-1.255.67-1.296 1.545-.04.873.551 1.229 1.227 1.229.675 0 1.18-.318 1.22-1.192s-.476-1.582-1.151-1.582m7.664 1.545c-.04-.874-.62-1.545-1.295-1.545-.676 0-1.191.708-1.15 1.582.04.875.544 1.192 1.219 1.192s1.267-.356 1.226-1.23m-1.94 2.285a.19.19 0 0 0-.158-.263 24 24 0 0 0-2.382-.116c-.838 0-1.64.042-2.382.116a.19.19 0 0 0-.158.263 2.753 2.753 0 0 0 5.08 0"/><path fill="currentColor" fillRule="evenodd" d="M1.68 12C1.68 6.3 6.3 1.68 12 1.68S22.32 6.3 22.32 12 17.7 22.32 12 22.32H3.175a.62.62 0 0 1-.438-1.057l1.966-1.966A10.3 10.3 0 0 1 1.68 12m14.093-4.13A1.72 1.72 0 0 1 14.1 6.546v.002c-.987.14-1.748.99-1.748 2.013v.007c1.527.057 2.924.487 4.03 1.172a2.41 2.41 0 1 1 2.501 4.088c-.076 2.8-3.128 5.053-6.878 5.053s-6.798-2.25-6.878-5.049A2.409 2.409 0 0 1 6.149 9.24c.555 0 1.066.188 1.473.503 1.097-.68 2.478-1.11 3.99-1.174V8.56a2.78 2.78 0 0 1 2.477-2.758 1.72 1.72 0 1 1 1.684 2.068" clipRule="evenodd"/></svg>
    );
  },
);

RedditBlack.displayName = 'RedditBlack';
