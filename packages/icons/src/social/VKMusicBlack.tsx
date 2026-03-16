import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VKMusicBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.75 7.29c-2.148 1.478-4.416 3.024-8.069 3.024.012-3.834.137-5.87 1.45-7.183C4.58 1.68 6.917 1.68 11.587 1.68h.826c4.67 0 7.005 0 8.456 1.45 1.032 1.033 1.33 2.512 1.416 4.962-.645-.522-1.595-1.28-2.735-1.916-1.193-.665-2.65-1.228-4.248-1.228-2.147 0-3.845 1.168-5.453 2.274z"/><path fill="currentColor" fillRule="evenodd" d="M22.32 11.58q0-.798-.002-1.507a.86.86 0 0 1-.529-.176c-.144-.11-.312-.246-.488-.389l-.008-.007c-.65-.526-1.532-1.238-2.58-1.823-1.05-.585-2.213-1.01-3.41-1.01-1.566 0-2.845.848-4.578 2.04l-.03.02c-2.16 1.486-4.808 3.306-9.015 3.306v.379c0 4.67 0 7.005 1.45 8.456 1.388 1.387 3.582 1.448 7.85 1.45h2.04c4.268-.002 6.463-.063 7.85-1.45 1.45-1.45 1.45-3.786 1.45-8.456zm-7.946-1.752a.928.928 0 0 1 1.858 0V18.3a.928.928 0 0 1-1.858 0zm3.302 2.373a.928.928 0 0 1 1.858 0v3.726a.928.928 0 0 1-1.858 0zm-6.604 0a.928.928 0 0 1 1.857 0v3.726a.928.928 0 0 1-1.857 0zm-3.303 1.342a.928.928 0 0 1 1.857 0v1.042a.928.928 0 0 1-1.857 0zm-3.303 0a.928.928 0 0 1 1.858 0v1.042a.928.928 0 0 1-1.858 0z" clipRule="evenodd"/></svg>
    );
  },
);

VKMusicBlack.displayName = 'VKMusicBlack';
