import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Badminton = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.236 1.578a2 2 0 0 1 1.776-.552l2.396.44c.688.128 1.26.607 1.508 1.26l3.882 10.25q.063.172.095.345l.613.614a4 4 0 0 1 0 5.657l-1.414 1.414a4 4 0 0 1-5.657 0l-.614-.613a2 2 0 0 1-.344-.095l-10.25-3.882a2 2 0 0 1-1.26-1.508l-.441-2.396a2 2 0 0 1 .552-1.777L3.215 9.6c.15-.15.32-.27.5-.364q.011-.273.1-.542l1.028-3.085a2 2 0 0 1 1.265-1.265l3.085-1.028q.268-.089.542-.1c.093-.18.214-.35.364-.5zm.897 16.073 2.052.777.141-.142-1.616-1.213zm-8.64-5.501.442 2.395 6.147 2.328 1.012-1.012-6.465-4.848zm10.646 3.495 1.388 1.04.004.005.223.166 1.603-1.602-.171-.227-1.041-1.388zM6.74 6.24 5.712 9.325l.104.077.013.01 6.694 5.02 2.41-2.41-5.02-6.693-.01-.013-.078-.104zm10.833 5.97 1.213 1.616.142-.141-.777-2.052zm-6.06-8.081 4.848 6.465 1.012-1.012-2.328-6.147-2.395-.443z"/></svg>
    );
  },
);

Badminton.displayName = 'Badminton';
