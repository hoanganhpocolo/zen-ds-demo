import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VKMusic = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#07F" fillRule="evenodd" d="M3.13 3.13c-1.407 1.408-1.449 3.648-1.45 8.044 3.94 0 6.4-1.691 8.557-3.175 1.686-1.159 3.187-2.191 5.065-2.191 2.796 0 5.237 1.977 6.532 3.025q.274.224.477.38c-.041-3.135-.261-4.901-1.442-6.082-1.45-1.451-3.786-1.451-8.456-1.451h-.826c-4.67 0-7.005 0-8.456 1.45m7.85 19.19h2.04z" clipRule="evenodd"/><path fill="#F45FFF" fillRule="evenodd" d="M1.68 11.174c3.94 0 6.4-1.691 8.557-3.175 1.686-1.159 3.187-2.191 5.065-2.191 2.796 0 5.237 1.977 6.532 3.025q.274.224.477.38c.009.717.009 1.505.009 2.374v.826c0 4.67 0 7.005-1.45 8.456-1.387 1.387-3.582 1.448-7.85 1.45h-2.04c-4.268-.002-6.462-.063-7.85-1.45-1.45-1.45-1.45-3.786-1.45-8.456z" clipRule="evenodd"/><path fill="#fff" d="M17.676 12.201a.928.928 0 0 1 1.858 0v3.726a.928.928 0 0 1-1.858 0zm-3.302-2.373a.928.928 0 0 1 1.857 0V18.3a.928.928 0 0 1-1.857 0zm-3.303 2.373a.928.928 0 0 1 1.858 0v3.726a.928.928 0 0 1-1.858 0zm-3.302 1.342a.928.928 0 0 1 1.857 0v1.042a.928.928 0 0 1-1.857 0zm-3.303 0a.928.928 0 0 1 1.858 0v1.042a.928.928 0 0 1-1.858 0z"/></svg>
    );
  },
);

VKMusic.displayName = 'VKMusic';
