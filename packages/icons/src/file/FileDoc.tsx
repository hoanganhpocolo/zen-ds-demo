import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const FileDoc = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      <svg ref={ref} {...rest} fill="none" viewBox="0 0 32 40" width={width} height={height}><path fill="#007AF1" fillRule="evenodd" d="M4 0a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12.996a4 4 0 0 0-.982-2.625l-7.822-8.996A4 4 0 0 0 20.177 0zm5 14a1 1 0 0 0 0 2h7.5a1 1 0 0 0 0-2zm0 5a1 1 0 0 0 0 2h14.5a1 1 0 0 0 0-2zm0 5a1 1 0 0 0 0 2h14.5a1 1 0 0 0 0-2zm0 5a1 1 0 0 0 0 2h14.5a1 1 0 0 0 0-2z" clipRule="evenodd"/></svg>
    );
  },
);

FileDoc.displayName = 'FileDoc';
