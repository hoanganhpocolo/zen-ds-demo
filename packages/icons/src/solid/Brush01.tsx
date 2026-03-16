import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Brush01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.53 1.865a3.26 3.26 0 0 1 4.516.087 3.25 3.25 0 0 1 .087 4.508l-8.41 9.068-.012.012-.865.933-.087.093c-.392.424-.73.79-1.117 1.018a3.05 3.05 0 0 1-1.51.423 4.55 4.55 0 0 1-1.324 3.618c-.956.954-2.27 1.241-3.434 1.334-.788.063-1.664.04-2.427.02-.338-.008-.654-.017-.931-.017a1.014 1.014 0 0 1-.904-1.478c.362-.706.33-1.538.284-2.666l-.004-.102-.002-.026c-.04-1.003-.099-2.476.95-3.522a4.57 4.57 0 0 1 3.624-1.32 3.04 3.04 0 0 1 .423-1.51c.23-.387.595-.724 1.02-1.115l.093-.086zm-8.648 10.76c-.572.529-.688.65-.744.746a1.01 1.01 0 0 0-.02.998c.053.097.164.223.715.773s.677.66.775.713c.313.17.693.163 1-.018.095-.057.217-.172.747-.743l.205-.222-2.456-2.452z"/></svg>
    );
  },
);

Brush01.displayName = 'Brush01';
