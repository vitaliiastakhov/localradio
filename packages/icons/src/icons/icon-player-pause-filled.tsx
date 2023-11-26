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
      fill='color(display-p3 .0314 .0392 .0118)'
      d='M8.3846 4H6.6923c-.4488 0-.8793.2107-1.1966.5858C5.1783 4.9608 5 5.4696 5 6v12c0 .5304.1783 1.0391.4957 1.4142.3173.3751.7478.5858 1.1966.5858h1.6923c.4488 0 .8793-.2107 1.1967-.5858.3173-.3751.4956-.8838.4956-1.4142V6c0-.5304-.1783-1.0391-.4956-1.4142C9.2639 4.2108 8.8334 4 8.3846 4Zm8.9231 0h-1.6923c-.4488 0-.8793.2107-1.1967.5858-.3173.375-.4956.8838-.4956 1.4142v12c0 .5304.1783 1.0391.4956 1.4142.3174.3751.7479.5858 1.1967.5858h1.6923c.4488 0 .8793-.2107 1.1966-.5858C18.8217 19.0391 19 18.5304 19 18V6c0-.5304-.1783-1.0391-.4957-1.4142C18.187 4.2108 17.7565 4 17.3077 4Z'
    />
    <path
      stroke={color}
      d='M8.3846 4H6.6923c-.4488 0-.8793.2107-1.1966.5858C5.1783 4.9608 5 5.4696 5 6v12c0 .5304.1783 1.0391.4957 1.4142.3173.3751.7478.5858 1.1966.5858h1.6923c.4488 0 .8793-.2107 1.1967-.5858.3173-.3751.4956-.8838.4956-1.4142V6c0-.5304-.1783-1.0391-.4956-1.4142C9.2639 4.2108 8.8334 4 8.3846 4Zm8.9231 0h-1.6923c-.4488 0-.8793.2107-1.1967.5858-.3173.375-.4956.8838-.4956 1.4142v12c0 .5304.1783 1.0391.4956 1.4142.3174.3751.7479.5858 1.1967.5858h1.6923c.4488 0 .8793-.2107 1.1966-.5858C18.8217 19.0391 19 18.5304 19 18V6c0-.5304-.1783-1.0391-.4957-1.4142C18.187 4.2108 17.7565 4 17.3077 4Z'
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgIcon);
ForwardRef.displayName = 'IconPlayerPauseFilled';

export { ForwardRef as IconPlayerPauseFilled };
