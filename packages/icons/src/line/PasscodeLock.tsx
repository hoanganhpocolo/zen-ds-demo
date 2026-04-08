import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PasscodeLock = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 12.252c1.5 0 2.714 1.216 2.714 2.715v.533H20a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1h.286v-.533c0-1.5 1.215-2.715 2.714-2.715M15 19h4v-1.5h-4zm4-15a4 4 0 0 1 4 4v4h-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6v2H5a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm-2 10.252a.714.714 0 0 0-.714.715v.533h1.428v-.533a.714.714 0 0 0-.714-.715M8 11H6V9h2zm5 0h-2V9h2zm5 0h-2V9h2z"/></svg>
    );
  },
);

PasscodeLock.displayName = 'PasscodeLock';
