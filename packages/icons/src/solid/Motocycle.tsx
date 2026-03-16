import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Motocycle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M17.5 2A5.5 5.5 0 0 1 23 7.5V8a1 1 0 0 1-1 1h-4.613l.35 1.054Q18.112 10 18.5 10a5.5 5.5 0 1 1-5.477 5h-2.046q.022.247.023.5a5.5 5.5 0 1 1-5.067-5.482l.209-.777q.022-.086.06-.165Q6.185 9.04 6.173 9H4a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2h2.174C6.586 5.835 7.694 5 9 5h4c1.312 0 2.423.843 2.831 2.016A1 1 0 0 1 16 7h.5V3a1 1 0 0 1 1-1M5.401 12.002a3.5 3.5 0 1 0 1.932.517l-.867 3.24a1 1 0 0 1-1.932-.518zm12.987 0 1.06 3.182a1 1 0 0 1-1.896.632l-1.062-3.182A3.5 3.5 0 1 0 18.5 12q-.057 0-.112.003m-2.89-2.344A3 3 0 0 1 13 11H9q-.19-.002-.374-.024A5.5 5.5 0 0 1 10.398 13h3.204a5.5 5.5 0 0 1 2.239-2.315z" clipRule="evenodd"/></svg>
    );
  },
);

Motocycle.displayName = 'Motocycle';
