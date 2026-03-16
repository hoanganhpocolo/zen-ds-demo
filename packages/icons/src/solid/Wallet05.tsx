import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wallet05 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.961 1c1.256 0 2.389.649 3.04 1.662A3.61 3.61 0 0 1 15.038 1h.154c2.198 0 3.771 1.961 3.478 4h.711a2 2 0 0 1 1.789 2.895l-1.03 2.061 2.048 3.413a4 4 0 0 1 .416 3.157l-1.228 4.298A3 3 0 0 1 18.491 23H5.51a3 3 0 0 1-2.885-2.176l-1.227-4.298a4 4 0 0 1 .416-3.157L3.86 9.956 2.83 7.895a1.98 1.98 0 0 1 .088-1.946 2 2 0 0 1 .701-.683 1.96 1.96 0 0 1 1-.266h.711c-.293-2.039 1.28-4 3.479-4zM5.895 9.553a1 1 0 0 1-.037.962L4.966 12h14.068l-.891-1.485a1 1 0 0 1-.037-.962L18.382 9H5.618zM8.808 3A1.51 1.51 0 0 0 7.38 5h3.339l-.196-.78A1.61 1.61 0 0 0 8.962 3zm6.231 0a1.61 1.61 0 0 0-1.563 1.22L13.28 5h3.34a1.51 1.51 0 0 0-1.428-2z"/></svg>
    );
  },
);

Wallet05.displayName = 'Wallet05';
