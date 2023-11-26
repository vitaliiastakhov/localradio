import * as React from 'react';
import { IconProps } from '../types/icon';

const SvgIcon = (
  { color = 'currentColor', size = 14, ...props }: IconProps,
  forwardedRef: React.Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 24 24'
    ref={forwardedRef}
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 5V3m5 4.0001 1.4-1.4M19 12h2m-4 5 1.4 1.4M12 19v2m-4.9999-4-1.4 1.4M6 12H4m3.0001-4.9999-1.4-1.4M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconBrightnessUp';

export { ForwardRef as IconBrightnessUp };
