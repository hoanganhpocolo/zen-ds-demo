import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hearts = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M8.424 2.554c.985-.534 2.212-.73 3.37-.373 1.693.522 2.716 1.646 3.217 3.037.385 1.07.455 2.266.358 3.437 1.187.495 2.022 1.544 2.302 2.791 2.232-.688 4.667.49 5.197 2.844.658 2.928-1.192 5.074-3.44 6.285-2.251 1.212-5.203 1.694-7.572 1.278a1 1 0 0 1-.575-.321c-1.343-1.515-2.302-3.712-2.575-5.873-1.668-.249-3.551-.85-5.037-1.862C1.895 12.59.554 10.676 1.137 8.081c.53-2.354 2.965-3.531 5.196-2.843.262-1.161 1.053-2.12 2.091-2.684m7.287 9.291c-.25-1.107-1.359-1.771-2.578-1.395-.955.294-1.573.85-1.962 1.555-.4.727-.58 1.664-.539 2.715.075 1.856.836 3.856 1.92 5.216 1.857.233 4.17-.175 5.927-1.122 1.871-1.007 2.813-2.418 2.438-4.086-.25-1.108-1.36-1.77-2.579-1.394l-1.11.342a1 1 0 0 1-1.272-.736z" clipRule="evenodd"/></svg>
    );
  },
);

Hearts.displayName = 'Hearts';
