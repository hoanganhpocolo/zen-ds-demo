import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Google = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g clipPath="url(#a)"><foreignObject width="3655.85" height="3655.85" x="-1827.92" y="-1827.92" transform="matrix(-.006 -.0065 .01516 -.014 11.487 10)"><div style={{background:"conic-gradient(from 90deg,#f2801c 0deg,#ea4335 17.8006deg,#ea4335 117.356deg,#4285f4 157.184deg,#4285f4 179.217deg,#34a853 207.088deg,#fbbc05 288.747deg,#fbbc05 343.002deg,#f2801c 360deg)",height:"100%",width:"100%",opacity:"1"}}/></foreignObject></g><path d="m21.765 10.41-.104-.443h-9.604v4.065h5.738c-.596 2.829-3.36 4.318-5.618 4.318-1.643 0-3.375-.691-4.52-1.802a6.46 6.46 0 0 1-1.927-4.556c0-1.712.77-3.424 1.89-4.55 1.119-1.127 2.81-1.757 4.49-1.757 1.926 0 3.306 1.022 3.822 1.488L18.82 4.3c-.847-.744-3.174-2.62-6.802-2.62-2.799 0-5.483 1.072-7.444 3.027C2.638 6.632 1.636 9.417 1.636 12s.948 5.228 2.824 7.168c2.004 2.07 4.843 3.152 7.767 3.152 2.66 0 5.18-1.042 6.977-2.933 1.766-1.861 2.68-4.437 2.68-7.137 0-1.136-.114-1.811-.12-1.84"/><defs><clipPath id="a"><path d="m21.765 10.41-.104-.443h-9.604v4.065h5.738c-.596 2.829-3.36 4.318-5.618 4.318-1.643 0-3.375-.691-4.52-1.802a6.46 6.46 0 0 1-1.927-4.556c0-1.712.77-3.424 1.89-4.55 1.119-1.127 2.81-1.757 4.49-1.757 1.926 0 3.306 1.022 3.822 1.488L18.82 4.3c-.847-.744-3.174-2.62-6.802-2.62-2.799 0-5.483 1.072-7.444 3.027C2.638 6.632 1.636 9.417 1.636 12s.948 5.228 2.824 7.168c2.004 2.07 4.843 3.152 7.767 3.152 2.66 0 5.18-1.042 6.977-2.933 1.766-1.861 2.68-4.437 2.68-7.137 0-1.136-.114-1.811-.12-1.84"/></clipPath></defs></svg>
    );
  },
);

Google.displayName = 'Google';
