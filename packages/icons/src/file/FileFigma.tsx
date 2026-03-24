import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const FileFigma = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      <svg ref={ref} {...rest} fill="none" viewBox="0 0 32 40" width={width} height={height}><path fill="#E4E6EE" d="M0 4a4 4 0 0 1 4-4h16.177a4 4 0 0 1 3.019 1.375l7.822 8.996A4 4 0 0 1 32 12.996V36a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"/><path fill="#00BCFF" d="M16.028 21.707a3.986 3.986 0 1 1 7.972 0 3.986 3.986 0 0 1-7.972 0"/><path fill="#00CF7F" d="M8.056 29.732a3.986 3.986 0 0 1 3.986-3.986l2.124-1.121 1.862 1.121v3.986a3.986 3.986 0 1 1-7.972 0"/><path fill="#FF7361" d="m16.06 10-2.168 3.768 2.169 4.204h3.93a3.986 3.986 0 1 0 0-7.972z"/><path fill="#FF4D12" d="M8 13.986a3.986 3.986 0 0 0 3.986 3.986l2.114.817 1.928-.817V10h-4.042A3.986 3.986 0 0 0 8 13.986"/><path fill="#B659FF" d="M8.056 21.707a3.986 3.986 0 0 0 3.986 3.985h3.986v-7.971h-3.986a3.986 3.986 0 0 0-3.986 3.985"/></svg>
    );
  },
);

FileFigma.displayName = 'FileFigma';
