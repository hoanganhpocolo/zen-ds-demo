import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IceCream = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2q.152 0 .302.007l.057.005q.111.006.221.016l.11.013q.094.01.187.023l.11.018a6 6 0 0 1 .846.204l.14.048.109.037.03.01.224.09.018.008q.252.109.492.238.058.031.116.065l.103.06q.08.047.158.097l.073.047a6 6 0 0 1 .364.261l.07.056q.07.054.137.111l.083.072.113.099q.052.048.103.1.303.291.563.625l.06.075A6 6 0 0 1 17.915 7H18a5 5 0 0 1 .696 9.95l-1.767 4.421A1 1 0 0 1 16 22H8a1 1 0 0 1-.929-.629l-1.768-4.42A5 5 0 0 1 6 7h.085A6 6 0 0 1 12 2M8.677 20h6.646l1.2-3H7.478zM12 4a4 4 0 0 0-4 4 1 1 0 0 1-1 1H6a3 3 0 1 0 0 6h12l.154-.004A3 3 0 0 0 18 9h-.085A6 6 0 0 1 12 14v-2a4 4 0 0 0 0-8"/></svg>
    );
  },
);

IceCream.displayName = 'IceCream';
