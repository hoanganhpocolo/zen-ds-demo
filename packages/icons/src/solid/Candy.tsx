import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Candy = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g clipPath="url(#a)"><path fill="currentColor" d="M2.808 1.394C3.973.228 5.968.894 6.2 2.525l.178 1.246c3.61-2.263 8.638-1.482 11.985 1.865s4.127 8.374 1.863 11.984l1.248.179c1.631.233 2.297 2.228 1.131 3.393l-1.414 1.414c-1.165 1.166-3.16.5-3.393-1.131l-.178-1.248c-3.61 2.263-8.638 1.484-11.985-1.863S1.508 9.988 3.772 6.378L2.525 6.2C.894 5.968.228 3.973 1.394 2.808zm16.97 19.798 1.414-1.414-1.649-.235zm-13.89-5.666a9.2 9.2 0 0 0 2.586 2.586l9.638-9.64a9.2 9.2 0 0 0-2.585-2.584zM2.808 4.222l1.649.235-.235-1.65z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    );
  },
);

Candy.displayName = 'Candy';
