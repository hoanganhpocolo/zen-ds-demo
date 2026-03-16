import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Waves = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.778 17.024a5.08 5.08 0 0 1 4.473 0L23 18.054l-.895 1.758-1.749-1.03a3.05 3.05 0 0 0-2.683 0l-1.422.7a5.08 5.08 0 0 1-4.473 0l-1.422-.7a3.05 3.05 0 0 0-2.683 0l-1.247.613a5.08 5.08 0 0 1-4.809-.181L1 18.849l1.03-1.685.616.364c.88.519 1.968.56 2.885.108l1.247-.612a5.08 5.08 0 0 1 4.473 0l1.422.698a3.05 3.05 0 0 0 2.683 0zm0-6.087a5.08 5.08 0 0 1 4.473 0L23 11.89l-.895 1.758-1.749-.952a3.05 3.05 0 0 0-2.683 0l-1.422.7a5.08 5.08 0 0 1-4.473 0l-1.422-.7a3.05 3.05 0 0 0-2.683 0l-1.247.613a5.08 5.08 0 0 1-4.809-.181L1 12.762l1.03-1.685.616.364c.88.519 1.968.56 2.885.11l1.247-.614a5.08 5.08 0 0 1 4.473 0l1.422.7a3.05 3.05 0 0 0 2.683 0zm0-6.418a5.08 5.08 0 0 1 4.473 0L23 5.508l-.895 1.757-1.749-.988a3.05 3.05 0 0 0-2.683 0l-1.422.7a5.08 5.08 0 0 1-4.473 0l-1.422-.7a3.05 3.05 0 0 0-2.683 0l-1.247.613a5.08 5.08 0 0 1-4.809-.181L1 6.344 2.03 4.66l.616.364c.88.519 1.968.56 2.885.109l1.247-.613a5.08 5.08 0 0 1 4.473 0l1.422.698a3.05 3.05 0 0 0 2.683 0z"/></svg>
    );
  },
);

Waves.displayName = 'Waves';
