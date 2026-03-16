import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Xing = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#005A5F" d="M5.093 5.756c-.179 0-.33.063-.406.186-.078.127-.066.29.017.457l2.013 3.484q.004.008 0 .017l-3.163 5.58c-.082.165-.078.33 0 .457a.44.44 0 0 0 .39.203H6.92c.445 0 .66-.3.812-.575l3.213-5.683L8.9 6.314c-.148-.264-.372-.558-.829-.558z"/><path fill="#D4D600" d="M17.6 1.68c-.445 0-.638.28-.798.567L10.18 13.993l4.23 7.76c.147.264.375.567.83.567h2.974c.18 0 .32-.068.395-.19.08-.127.077-.295-.006-.46l-4.196-7.668a.02.02 0 0 1 0-.02l6.59-11.653c.083-.164.085-.332.007-.459-.076-.122-.217-.19-.396-.19z"/></svg>
    );
  },
);

Xing.displayName = 'Xing';
