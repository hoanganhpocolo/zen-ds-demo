import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FaceId = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 18a2 2 0 0 0 2 2h2v2H6a4 4 0 0 1-4-4v-2h2zm18 0a4 4 0 0 1-4 4h-2v-2h2a2 2 0 0 0 2-2v-2h2zm-5.168-1.985c-2.64 2.64-7.211 2.64-9.852 0L8.395 14.6c1.859 1.86 5.164 1.86 7.023 0zM13.187 11.5a1 1 0 0 1-.46.842l-1.563 1-1.078-1.684 1.101-.705V8h2zM7.4 8.125a1.4 1.4 0 1 1-.001 2.8 1.4 1.4 0 0 1 .001-2.8m9 0a1.4 1.4 0 1 1-.001 2.8 1.4 1.4 0 0 1 .001-2.8M8 4H6a2 2 0 0 0-2 2v2H2V6a4 4 0 0 1 4-4h2zm10-2a4 4 0 0 1 4 4v2h-2V6a2 2 0 0 0-2-2h-2V2z"/></svg>
    );
  },
);

FaceId.displayName = 'FaceId';
