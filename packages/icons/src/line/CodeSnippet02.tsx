import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CodeSnippet02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.452 2.434 10.5 22l-1.952-.434L13.5 2zM7.586 7.828 3.414 12l4.172 4.172-1.414 1.414-4.879-4.879a1 1 0 0 1 0-1.414l4.879-4.879zm15.121 3.465a1 1 0 0 1 0 1.414l-4.879 4.879-1.414-1.414L20.586 12l-4.172-4.172 1.414-1.414z"/></svg>
    );
  },
);

CodeSnippet02.displayName = 'CodeSnippet02';
