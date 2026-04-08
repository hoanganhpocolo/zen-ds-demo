import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GooglePodcast = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#0066D9" d="M4.258 11.298v1.408a1.29 1.29 0 1 1-2.578-.004v-1.408a1.29 1.29 0 1 1 2.578.004"/><path fill="#4285F4" d="M19.742 11.335v-.037a1.29 1.29 0 0 1 2.578 0v1.445a1.286 1.286 0 0 1-1.289 1.252 1.29 1.29 0 0 1-1.289-1.252z"/><path fill="#EA4335" d="M8.715 15.518v1.408a1.29 1.29 0 0 1-2.577 0v-1.408a1.29 1.29 0 0 1 2.577 0m0-8.444v4.605a1.29 1.29 0 0 1-1.288 1.261c-.702 0-1.276-.56-1.29-1.261V7.074a1.29 1.29 0 0 1 2.578 0"/><path fill="#34A853" d="M15.286 8.482a1.29 1.29 0 0 0 2.578 0V7.074a1.29 1.29 0 0 0-2.578 0z"/><path fill="#FAB908" d="M10.712 4.377a1.29 1.29 0 0 0 2.578 0V2.969a1.29 1.29 0 0 0-2.578 0zm0 15.246a1.29 1.29 0 0 1 2.578 0v1.408a1.29 1.29 0 0 1-2.578 0z"/><path fill="#34A853" d="M15.286 12.353a1.29 1.29 0 0 1 2.578 0v4.573a1.29 1.29 0 0 1-2.578 0z"/><path fill="#FAB908" d="M13.29 8.249v7.503a1.29 1.29 0 0 1-2.578 0V8.25a1.29 1.29 0 0 1 2.578 0"/></svg>
    );
  },
);

GooglePodcast.displayName = 'GooglePodcast';
