import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bread = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3.61 3.61c1.825-1.824 4.434-2.396 7.065-1.981 2.631.416 5.365 1.823 7.619 4.077s3.662 4.988 4.077 7.62c.415 2.63-.156 5.239-1.981 7.064s-4.434 2.396-7.065 1.981-5.364-1.823-7.619-4.077-3.661-4.988-4.077-7.62c-.415-2.63.157-5.239 1.981-7.064m6.752-.005c-2.172-.343-4.077.159-5.338 1.42-1.26 1.26-1.762 3.165-1.42 5.337s1.528 4.53 3.516 6.518 4.347 3.173 6.518 3.516c2.172.342 4.077-.16 5.338-1.42 1.26-1.261 1.762-3.166 1.42-5.338q-.024-.14-.052-.283c-1.347.204-2.856.731-3.939 1.497l-1.154-1.633c1.297-.917 2.981-1.525 4.519-1.796a12.3 12.3 0 0 0-1.215-2.275c-2.094.053-4.271.774-5.556 2.06l-1.414-1.415c1.408-1.408 3.443-2.216 5.447-2.515l-.152-.158a14 14 0 0 0-2.041-1.683c-1.931.44-3.804 1.37-5.022 2.588L8.403 6.61c1.057-1.056 2.441-1.895 3.918-2.481a10 10 0 0 0-1.959-.524"/></svg>
    );
  },
);

Bread.displayName = 'Bread';
