import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CoffeeBean = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.718 1.507q.482-.018.972.013.491.03.985.109c2.631.416 5.365 1.823 7.619 4.077a15.4 15.4 0 0 1 2.975 4.155c.549 1.142.92 2.313 1.102 3.464.104.658.146 1.314.122 1.957a9 9 0 0 1-.086.953 7.8 7.8 0 0 1-.666 2.237 7 7 0 0 1-.456.813 6.84 6.84 0 0 1-2.813 2.456 7.8 7.8 0 0 1-2.237.666 9.4 9.4 0 0 1-1.926.073q-.49-.031-.984-.109a12.5 12.5 0 0 1-3.464-1.102q-.249-.12-.498-.253a15.4 15.4 0 0 1-3.657-2.722c-2.254-2.254-3.661-4.988-4.077-7.62-.415-2.63.157-5.239 1.981-7.064 1.37-1.368 3.18-2.032 5.108-2.103m-2.083 2.45a4.95 4.95 0 0 0-2.051 1.572c5.3.931 9.615 4.806 11.097 9.994l.357 1.251 1.924-.548-.358-1.253A16.07 16.07 0 0 0 6.634 3.956"/></svg>
    );
  },
);

CoffeeBean.displayName = 'CoffeeBean';
