import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Server05 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 17c1.306 0 2.414.835 2.826 2H22v2h-7.174a2.998 2.998 0 0 1-5.652 0H2v-2h7.174c.412-1.165 1.52-2 2.826-2m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-18a8 8 0 1 1 0 16 8 8 0 0 1 0-16m-1.964 9c.11 1.534.463 2.842.924 3.763.278.557.559.9.774 1.082a1 1 0 0 0 .217.141q.03.012.038.013L12 15l.01-.001.039-.013a1 1 0 0 0 .217-.141c.215-.183.495-.525.774-1.082.46-.921.814-2.229.924-3.763zm-3.951 0a6 6 0 0 0 2.86 4.164c-.488-1.154-.814-2.588-.913-4.164zm9.883 0c-.098 1.577-.426 3.01-.914 4.164A6 6 0 0 0 17.915 10zM8.945 3.835A6 6 0 0 0 6.085 8h1.947c.099-1.577.425-3.011.913-4.165m3.044-.834-.038.013a1 1 0 0 0-.217.141c-.215.183-.495.525-.774 1.082-.46.921-.814 2.228-.924 3.763h3.928c-.11-1.535-.463-2.842-.924-3.763-.278-.557-.559-.9-.774-1.082a1 1 0 0 0-.217-.141L12.01 3H12zm3.065.834c.488 1.154.815 2.588.914 4.165h1.947a6 6 0 0 0-2.861-4.165"/></svg>
    );
  },
);

Server05.displayName = 'Server05';
