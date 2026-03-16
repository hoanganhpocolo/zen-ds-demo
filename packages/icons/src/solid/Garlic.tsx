import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Garlic = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a1 1 0 0 1 .977.785v.001l.002.007.006.032.033.134a18 18 0 0 0 .664 2.099c.236.606.521 1.219.85 1.734.335.528.668.877.968 1.05.97.561 2.584 1.443 3.936 2.718C20.803 10.85 22 12.629 22 15c0 2.6-1.362 4.63-3.267 5.974q-.285.199-.587.38C16.352 22.436 14.148 23 12 23c-2.388 0-4.846-.695-6.733-2.026C3.362 19.63 2 17.599 2 15c0-2.371 1.197-4.15 2.564-5.44C5.916 8.285 7.53 7.403 8.5 6.843c.3-.174.633-.523.969-1.051.327-.515.613-1.128.85-1.734a18 18 0 0 0 .696-2.233l.006-.032.002-.007A1 1 0 0 1 12 1m-3.198 9.398C7.904 11.588 7 13.228 7 16.074c0 1.442.162 2.742.448 3.877a9.8 9.8 0 0 0 2.372.82C9.334 19.62 9 18.043 9 16.074c0-2.328.708-3.556 1.398-4.472L9.6 11zM14.4 11l-.798.602c.69.916 1.398 2.144 1.398 4.472 0 1.97-.335 3.547-.821 4.696a9.8 9.8 0 0 0 2.372-.819c.286-1.135.449-2.435.449-3.877 0-2.846-.904-4.487-1.802-5.677z"/></svg>
    );
  },
);

Garlic.displayName = 'Garlic';
