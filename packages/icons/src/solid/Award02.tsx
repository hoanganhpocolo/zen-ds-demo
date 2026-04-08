import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Award02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m6.2 15.458.056-.195.04-.127q.014-.039.025-.076l.005-.016q.122-.352.285-.684l.044-.087q.074-.143.154-.282l.025-.042.041-.07a6 6 0 0 1 .364-.53l.035-.045.05-.062.023-.028q.07-.086.142-.17l.075-.082.025-.028.042-.044q.053-.058.108-.114l.05-.049L4.541 8.09A3 3 0 0 1 4 6.37V4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2.37c0 .615-.19 1.216-.542 1.72l-3.247 4.637a6 6 0 1 1-10.134 3.309l.002-.01a6 6 0 0 1 .121-.568m.103-.342.011-.038.007-.018zM6.016 3.827Q6 3.911 6 4v2.37c0 .204.063.405.18.573l3.245 4.635c.45-.214.932-.373 1.435-.47zm7.238 7.306a6 6 0 0 1 1.32.445l3.245-4.635A1 1 0 0 0 18 6.369V4q-.001-.09-.017-.175l-4.862 7.28zM11.99 9.197 16.13 3H7.866z"/></svg>
    );
  },
);

Award02.displayName = 'Award02';
