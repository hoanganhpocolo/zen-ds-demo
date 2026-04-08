import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Tram = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.646 1c2.36 0 4.69.55 6.801 1.605l-.894 1.79a13.2 13.2 0 0 0-3.088-1.09L14.618 5H17a4 4 0 0 1 4 4v8a4 4 0 0 1-1.304 2.953l1.172 2.05-1.736.993-1.204-2.106-.122.029q-.391.08-.806.081H7q-.414 0-.806-.081l-.123-.03-1.203 2.107-1.736-.992 1.17-2.05A4 4 0 0 1 3 17V8.999a4 4 0 0 1 4.001-4h2.382l-.848-1.694a13.2 13.2 0 0 0-3.087 1.089l-.894-1.79A15.2 15.2 0 0 1 11.355 1zM8.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7 7a2 2 0 0 0-2 2v3h14V9a2 2 0 0 0-2-2zm4.355-4q-.364 0-.727.02l.99 1.98h.764l.99-1.98Q13.008 3 12.645 3z"/></svg>
    );
  },
);

Tram.displayName = 'Tram';
