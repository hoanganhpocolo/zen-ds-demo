import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Reddit = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#FF4500" d="M12 1.68C6.3 1.68 1.68 6.3 1.68 12c0 2.85 1.155 5.43 3.023 7.297l-1.966 1.966a.62.62 0 0 0 .438 1.057H12c5.7 0 10.32-4.62 10.32-10.32S17.7 1.68 12 1.68"/><path fill="#fff" d="M14.1 6.547a1.72 1.72 0 1 0-.011-.745 2.78 2.78 0 0 0-2.477 2.759v.008c-1.512.064-2.893.495-3.99 1.174a2.41 2.41 0 1 0-2.495 4.09c.08 2.797 3.128 5.048 6.878 5.048s6.802-2.253 6.878-5.053a2.41 2.41 0 1 0-2.501-4.088c-1.106-.684-2.503-1.115-4.03-1.172V8.56c0-1.024.76-1.873 1.747-2.013zM7.524 13.18c.04-.874.621-1.545 1.296-1.545s1.19.708 1.15 1.582-.544 1.192-1.22 1.192-1.266-.356-1.226-1.23m7.665-1.545c.675 0 1.256.67 1.295 1.545.04.874-.551 1.23-1.226 1.23s-1.18-.318-1.22-1.193c-.04-.874.475-1.582 1.15-1.582m-.803 3.567a.19.19 0 0 1 .157.262 2.752 2.752 0 0 1-5.079 0 .19.19 0 0 1 .158-.262 24 24 0 0 1 2.382-.117c.837 0 1.639.042 2.381.117"/></svg>
    );
  },
);

Reddit.displayName = 'Reddit';
