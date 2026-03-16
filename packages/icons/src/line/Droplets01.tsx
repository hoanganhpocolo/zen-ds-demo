import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Droplets01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 2a1 1 0 0 1 .8.4l.002.002q0 .003.004.006l.014.019.053.072.197.272a52 52 0 0 1 2.798 4.358c.765 1.338 1.54 2.854 2.127 4.369C22.577 13 23 14.571 23 16a7 7 0 0 1-14 0c0-1.428.423-3 1.005-4.502.586-1.515 1.362-3.031 2.127-4.37A52 52 0 0 1 15.127 2.5l.053-.072.014-.019.004-.006.001-.002c.189-.251.486-.4.801-.4m-.11 2.89a50 50 0 0 0-2.022 3.231c-.735 1.287-1.46 2.709-1.998 4.1C11.327 13.624 11 14.929 11 16a5 5 0 0 0 10 0c0-1.071-.327-2.375-.87-3.78-.538-1.39-1.263-2.812-1.998-4.099A50 50 0 0 0 16.11 4.89L16 4.73zM5 1a1 1 0 0 1 .81.415l2.101 2.91c1.46 1.755 1.452 4.103-.026 5.852C7.12 11.08 6.08 11.57 5 11.57s-2.122-.49-2.886-1.394C.637 8.428.63 6.08 2.09 4.324l2.1-2.909A1 1 0 0 1 5 1M3.69 5.524q-.023.032-.047.061c-.857 1.014-.857 2.287 0 3.3.408.484.902.686 1.357.686s.95-.202 1.357-.685c.857-1.014.857-2.287 0-3.301l-.046-.06L5 3.708z"/></svg>
    );
  },
);

Droplets01.displayName = 'Droplets01';
