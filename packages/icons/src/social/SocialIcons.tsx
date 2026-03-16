import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SocialIcons = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#0A66C2" d="M20.796 1.68H3.204A1.524 1.524 0 0 0 1.68 3.204v17.592a1.524 1.524 0 0 0 1.524 1.524h17.592a1.524 1.524 0 0 0 1.524-1.524V3.204a1.524 1.524 0 0 0-1.524-1.524M7.832 19.263H4.729V9.406h3.103zM6.278 8.04A1.782 1.782 0 1 1 8.07 6.26a1.756 1.756 0 0 1-1.792 1.78M19.27 19.27h-3.102v-5.385c0-1.588-.675-2.078-1.546-2.078-.92 0-1.824.694-1.824 2.118v5.345H9.695V9.413h2.985v1.366h.04c.3-.607 1.348-1.643 2.95-1.643 1.73 0 3.601 1.028 3.601 4.038z"/></svg>
    );
  },
);

SocialIcons.displayName = 'SocialIcons';
