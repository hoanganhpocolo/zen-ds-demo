import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TelegramBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M22.32 12c0 5.7-4.62 10.32-10.32 10.32S1.68 17.7 1.68 12 6.3 1.68 12 1.68 22.32 6.3 22.32 12m-9.95-2.701q-1.506.625-6.019 2.592-.732.291-.767.57c-.04.314.354.438.89.606l.225.072c.527.171 1.236.372 1.604.38q.5.011 1.12-.414 4.215-2.846 4.352-2.877c.065-.014.154-.033.214.02.06.055.054.156.048.183-.039.166-1.583 1.602-2.382 2.345-.249.231-.425.395-.462.433q-.122.125-.242.24c-.49.472-.857.825.02 1.403.422.278.759.508 1.095.737.368.25.734.5 1.208.81q.18.121.349.242c.427.305.812.579 1.286.535.276-.025.56-.285.705-1.058.342-1.828 1.014-5.788 1.17-7.42a1.8 1.8 0 0 0-.018-.406.44.44 0 0 0-.147-.28c-.123-.1-.314-.12-.4-.12-.388.007-.983.215-3.85 1.407" clipRule="evenodd"/></svg>
    );
  },
);

TelegramBlack.displayName = 'TelegramBlack';
