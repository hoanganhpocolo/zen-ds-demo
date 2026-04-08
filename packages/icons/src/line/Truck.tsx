import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Truck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11 3a4 4 0 0 1 3.874 3H17.5a4 4 0 0 1 3.2 1.6L22 9.335a5 5 0 0 1 1 2.999V16.5a2 2 0 0 1-2 2h-.145a3.501 3.501 0 0 1-6.71 0h-3.29a3.501 3.501 0 0 1-6.71 0H2.75A1.75 1.75 0 0 1 1 16.75V7a4 4 0 0 1 4-4zM7.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5 5a2 2 0 0 0-2 2v9.5h1.134a3.45 3.45 0 0 1 3.16-2.493l.078-.004.08-.003h.096l.132.005.025.002a3.45 3.45 0 0 1 3.161 2.493H13V7a2 2 0 0 0-2-2zm10 10.052a3.5 3.5 0 0 1 .96-.697q.059-.029.116-.053l.056-.025a3.5 3.5 0 0 1 .587-.19l.072-.016.064-.011.109-.02.03-.004a3.5 3.5 0 0 1 1.069.009l.057.01q.103.02.203.043l.05.011q.122.032.241.073l.031.01q.124.043.243.095l.013.005q.117.052.229.111l.022.011q.107.058.21.122l.041.027a3.5 3.5 0 0 1 .95.912l.028.038q.07.104.135.212l.01.02q.13.222.227.466l.016.037q.047.124.086.252H21v-4.167q-.001-.168-.02-.333H15zM15 10h5.001l-.9-1.2A2 2 0 0 0 17.5 8H15z"/></svg>
    );
  },
);

Truck.displayName = 'Truck';
