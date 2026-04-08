import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MicrophoneOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.749 19.249-1.414 1.414-3.384-3.384A7.96 7.96 0 0 1 13 18.936V21h3v2H8v-2h3v-2.064A8 8 0 0 1 4 11V9h2v2a6 6 0 0 0 6 6 5.96 5.96 0 0 0 3.523-1.148l-1.439-1.44A4 4 0 0 1 8 11V8.328l-5.5-5.5 1.414-1.414zM20 11a8 8 0 0 1-.61 3.062l-1.576-1.577c.121-.475.186-.972.186-1.485V9h2zm-10 0a2 2 0 0 0 2.583 1.911L10 10.328zm2-10a4 4 0 0 1 4 4v5.67l-2-2V5a2 2 0 0 0-3.975-.303L8.462 3.133A4 4 0 0 1 12 1"/></svg>
    );
  },
);

MicrophoneOff.displayName = 'MicrophoneOff';
