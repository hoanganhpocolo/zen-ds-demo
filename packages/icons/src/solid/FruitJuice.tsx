import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FruitJuice = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.368 1.502q.209 0 .416.01l.195.01.28.02a11.95 11.95 0 0 1 5.42 1.808l.094.059q.621.4 1.2.883l.027.022a12 12 0 0 1 1.288 1.26l.128.147.07.083.15.183.063.08q.068.084.133.172l.047.062a12 12 0 0 1 1.145 1.859l.043.085a12 12 0 0 1-2.303 13.74 1 1 0 0 1-1.414 0h-.001v-.001h-.001l-.001-.002-.008-.007-.03-.03-5.114-5.114a1 1 0 0 1 .42-1.665l7.641-2.284c-.041-.67-.15-1.337-.325-1.99l-8.197 2.45a1 1 0 0 1-1.211-1.34l3.244-7.873a10 10 0 0 0-1.953-.51l-3.173 7.7a1 1 0 0 1-1.632.326L1.833 6.468l-.03-.029-.007-.008-.002-.002h-.002a1 1 0 0 1 .001-1.415 12 12 0 0 1 .485-.459l.057-.05q.102-.09.204-.177l.048-.04.202-.165.08-.063.155-.12.116-.089.176-.127.057-.042.173-.118q.304-.208.617-.393l.024-.014a12 12 0 0 1 .997-.525l.098-.045q.22-.102.444-.193l.099-.04q.212-.084.427-.161l.056-.02.29-.097a12 12 0 0 1 .867-.242 12 12 0 0 1 1.062-.205l.104-.015a12 12 0 0 1 1.736-.112M4 22H2v-3h2zm5-3H7v-3h2zm-5-4H2v-3h2z"/></svg>
    );
  },
);

FruitJuice.displayName = 'FruitJuice';
