import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Globe03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c1.046 0 2.06.147 3.021.42a4.88 4.88 0 0 1 5.529 1.108C21.77 3.8 22.22 5.565 21.9 7.2A10.96 10.96 0 0 1 23 12c0 6.075-4.925 11-11 11-1.72 0-3.349-.395-4.8-1.1A11 11 0 0 1 1 12a11 11 0 0 1 .347-2.75C2.567 4.508 6.873 1 12 1m-8.89 9.59Q3 11.28 3 12a9 9 0 0 0 4.314 7.686l1.477-2.195c.298-.443.448-.665.48-.895a1 1 0 0 0-.1-.59c-.105-.207-.32-.367-.747-.688L8.4 15.3a1 1 0 0 1-.314-.394l-1.39-3.13c-.137-.307-.206-.46-.311-.578a1 1 0 0 0-.336-.245c-.145-.064-.312-.082-.646-.118zm15.996-6.677a2.887 2.887 0 0 0-4.212 0c-1.191 1.24-1.191 3.27 0 4.51l.06.07L17 11.062l2.046-2.569.06-.07c1.191-1.24 1.191-3.27 0-4.51M17 4.667a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666"/></svg>
    );
  },
);

Globe03.displayName = 'Globe03';
