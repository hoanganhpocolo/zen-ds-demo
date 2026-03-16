import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Server03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.06 2c.755 0 1.38 0 1.892.041.533.042 1.023.133 1.49.358a4 4 0 0 1 1.73 1.616c.257.45.382.933.46 1.462.076.507.119 1.13.17 1.884l.66 9.55C22.808 19.553 20.684 22 18 22H6c-2.684 0-4.808-2.446-4.462-5.09l.66-9.549c.051-.753.093-1.377.17-1.884.078-.53.203-1.012.46-1.462a4 4 0 0 1 1.73-1.616c.467-.225.957-.316 1.49-.358C6.559 2.001 7.185 2 7.94 2zM6 15a2.5 2.5 0 0 0-2.472 2.121C3.426 18.607 4.395 20 6 20h12c1.605 0 2.574-1.393 2.472-2.879A2.5 2.5 0 0 0 18 15zm.51 1.5a1 1 0 1 1 0 2H6.5a1 1 0 1 1 0-2zm11.49 2h-6.5v-2H18zM7.98 4c-.805 0-1.35 0-1.774.034-.411.033-.625.092-.777.165a2 2 0 0 0-.865.808c-.084.147-.158.357-.218.764-.063.42-.101.964-.157 1.767l-.417 6.05A4.5 4.5 0 0 1 6 13h12c.81 0 1.57.214 2.227.589l-.416-6.05c-.056-.804-.094-1.348-.157-1.768-.06-.407-.134-.617-.218-.764-.2-.35-.503-.632-.866-.808-.152-.073-.366-.132-.776-.165C17.37 4.001 16.824 4 16.02 4z"/></svg>
    );
  },
);

Server03.displayName = 'Server03';
