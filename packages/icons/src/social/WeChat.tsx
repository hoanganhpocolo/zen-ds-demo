import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const WeChat = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#51C332" d="M15.87 8.148c.39 0 .773.032 1.15.079-.682-2.991-3.823-5.253-7.6-5.253-4.275 0-7.74 2.896-7.74 6.467 0 2.06 1.159 3.886 2.955 5.068l-1.02 2.046 2.78-1.194a8.8 8.8 0 0 0 1.877.469c-.09-.395-.142-.8-.142-1.215 0-3.566 3.471-6.467 7.74-6.467M12 5.884a.97.97 0 0 1 .968.97.969.969 0 1 1-1.935 0c0-.536.433-.97.967-.97m-5.16 1.94a.97.97 0 0 1-.967-.97c0-.535.433-.97.967-.97a.97.97 0 0 1 .968.97.97.97 0 0 1-.968.97"/><path fill="#51C332" d="M22.32 14.615c0-2.857-2.889-5.174-6.45-5.174s-6.45 2.317-6.45 5.174 2.888 5.174 6.45 5.174c.586 0 1.143-.083 1.683-.2l3.477 1.493-1.202-2.41c1.506-.946 2.492-2.402 2.492-4.057m-8.385-.323a.97.97 0 0 1-.968-.97.969.969 0 1 1 1.935 0c0 .535-.433.97-.967.97m3.87 0a.97.97 0 0 1-.967-.97.969.969 0 1 1 1.935 0 .97.97 0 0 1-.968.97"/></svg>
    );
  },
);

WeChat.displayName = 'WeChat';
